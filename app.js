// Main Application Controller for Animated Card Pack Opener

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const stageContainer = document.getElementById('stageContainer');
  const stageSpotlight = document.getElementById('stageSpotlight');
  const packWrapper = document.getElementById('packWrapper');
  const boosterPack = document.getElementById('boosterPack');
  const packTopSeal = document.getElementById('packTopSeal');
  const packFoilGlare = document.getElementById('packFoilGlare');
  const cardItem = document.getElementById('cardItem');
  const cardHoloLayer = document.getElementById('cardHoloLayer');
  const cardGlareHotspot = document.getElementById('cardGlareHotspot');
  
  // Card UI details
  const cardName = document.getElementById('cardName');
  const cardTitle = document.getElementById('cardTitle');
  const cardCost = document.getElementById('cardCost');
  const cardArtContainer = document.getElementById('cardArtContainer');
  const cardElementIcon = document.getElementById('cardElementIcon');
  const cardElementName = document.getElementById('cardElementName');
  const cardAbility = document.getElementById('cardAbility');
  const cardLore = document.getElementById('cardLore');
  const cardRarityTag = document.getElementById('cardRarityTag');
  const cardAtk = document.getElementById('cardAtk');
  const cardDef = document.getElementById('cardDef');
  
  // Controls & Badges
  const btnOpenPack = document.getElementById('btnOpenPack');
  const btnResetPack = document.getElementById('btnResetPack');
  const cardSelector = document.getElementById('cardSelector');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const collectionCountBadge = document.getElementById('collectionCountBadge');
  const btnOpenBinder = document.getElementById('btnOpenBinder');
  const btnCloseBinder = document.getElementById('btnCloseBinder');
  const binderModal = document.getElementById('binderModal');
  const binderGrid = document.getElementById('binderGrid');
  const binderUnlockedCount = document.getElementById('binderUnlockedCount');

  // Particle System Instance
  const fxCanvas = document.getElementById('fxCanvas');
  const particleEngine = new ParticleSystem(fxCanvas);

  // App State
  let state = 'IDLE'; // IDLE, CHARGING, TEARING, EMERGING, REVEALED
  let currentCard = null;
  let unlockedCards = new Set();

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  // Load saved collection from localStorage
  function loadCollection() {
    try {
      const saved = localStorage.getItem('arcane_rift_collection');
      if (saved) {
        unlockedCards = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
    updateCollectionUI();
  }

  function saveCollection() {
    try {
      localStorage.setItem('arcane_rift_collection', JSON.stringify([...unlockedCards]));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
    updateCollectionUI();
  }

  function updateCollectionUI() {
    const total = CARDS_DATA.length;
    const count = unlockedCards.size;
    collectionCountBadge.textContent = `Discovered: ${count} / ${total}`;
    if (binderUnlockedCount) {
      binderUnlockedCount.textContent = count;
    }
  }

  // Populate Card Front DOM
  function setupCardDisplay(card) {
    currentCard = card;
    cardItem.setAttribute('data-rarity', card.rarity);
    cardName.textContent = card.name;
    cardTitle.textContent = card.title;
    cardCost.textContent = card.cost;
    cardArtContainer.innerHTML = card.svgArt;
    cardElementIcon.textContent = card.elementIcon;
    cardElementName.textContent = card.element;
    cardAbility.textContent = card.ability;
    cardLore.textContent = `"${card.lore}"`;
    cardRarityTag.textContent = card.rarity.toUpperCase();
    cardAtk.textContent = card.attack.toLocaleString();
    cardDef.textContent = card.defense.toLocaleString();

    // Configure Holo Gradient Overlay
    if (card.colorTheme && card.colorTheme.holoGradient) {
      cardHoloLayer.style.background = card.colorTheme.holoGradient;
    }

    // Update Spotlight Color
    stageSpotlight.style.background = `radial-gradient(circle, ${card.colorTheme.glow || 'rgba(99,102,241,0.3)'} 0%, rgba(0,0,0,0) 70%)`;
  }

  // Execute the Pack Opening Sequence (Async/Await sequence)
  async function startPackOpening() {
    if (state !== 'IDLE') return;

    // Determine which card will be opened
    const selectedMode = cardSelector.value;
    const targetCard = (selectedMode === 'random') 
      ? getRandomCard() 
      : getCardById(selectedMode);

    setupCardDisplay(targetCard);

    // Save to collection immediately
    unlockedCards.add(targetCard.id);
    saveCollection();

    // Phase 1: CHARGING (350ms)
    state = 'CHARGING';
    btnOpenPack.disabled = true;
    cardSelector.disabled = true;
    soundFX.playPackShake();
    boosterPack.classList.add('charging');
    await sleep(350);

    // Phase 2: FOIL TEAR (250ms)
    state = 'TEARING';
    boosterPack.classList.remove('charging');
    boosterPack.classList.add('ripped');
    soundFX.playFoilTear();

    // Spawn foil flakes at tear line
    const rect = packTopSeal.getBoundingClientRect();
    const tearX = rect.left + rect.width / 2;
    const tearY = rect.top + rect.height / 2;
    particleEngine.spawnFoilFlakes(tearX, tearY, 50);
    await sleep(250);

    // Phase 3: CARD SLIDE & EMERGE (550ms)
    state = 'EMERGING';
    soundFX.playCardSlide();
    boosterPack.classList.add('wrapper-drop');
    cardItem.classList.add('anim-emerge');
    await sleep(550);

    // Phase 4: FLIP REVEAL & FANFARE (300ms)
    soundFX.playCardSnap();
    soundFX.playFanfare(targetCard.rarity);

    // Get card center for particle burst
    const cardRect = cardItem.getBoundingClientRect();
    const burstX = cardRect.left + cardRect.width / 2;
    const burstY = cardRect.top + cardRect.height / 2;
    particleEngine.spawnRarityBurst(burstX, burstY, targetCard.rarity, targetCard.colorTheme);
    await sleep(300);

    // Phase 5: REVEALED & 3D INSPECTION READY
    state = 'REVEALED';
    cardItem.classList.remove('anim-emerge');
    cardItem.classList.add('revealed', 'floating');
    btnResetPack.classList.add('visible');
    btnOpenPack.style.display = 'none';
  }

  // Reset Stage for Opening Another Pack
  function resetPack() {
    state = 'IDLE';
    
    // Reset Card
    cardItem.classList.remove('revealed', 'floating', 'anim-emerge');
    cardItem.style.transform = '';
    cardHoloLayer.style.opacity = '0';
    cardGlareHotspot.style.opacity = '0';

    // Reset Pack
    boosterPack.classList.remove('ripped', 'wrapper-drop', 'charging');
    packWrapper.style.transform = '';
    
    // Reset Spotlight
    stageSpotlight.style.background = 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.1) 45%, transparent 70%)';

    // Reset Controls
    btnResetPack.classList.remove('visible');
    btnOpenPack.style.display = 'flex';
    btnOpenPack.disabled = false;
    cardSelector.disabled = false;
  }

  // 3D Perspective Tilt & Holographic Lighting on Mouse/Touch
  function handlePointerMove(e) {
    const rect = stageContainer.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / (rect.width / 2); // -1 to 1
    const deltaY = (y - centerY) / (rect.height / 2); // -1 to 1

    if (state === 'IDLE') {
      // Subtle tilt on the unopened pack
      const rotY = deltaX * 14;
      const rotX = -deltaY * 14;
      packWrapper.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;

      // Smooth linear metallic sheen sweep across the pack
      const sweepPos = 50 + deltaX * 30;
      packFoilGlare.style.background = `linear-gradient(${135 + deltaX * 20}deg, transparent 0%, rgba(255,255,255,0.06) ${sweepPos - 20}%, rgba(255,255,255,0.24) ${sweepPos}%, rgba(255,255,255,0.06) ${sweepPos + 20}%, transparent 100%)`;
    } 
    else if (state === 'REVEALED') {
      // Full 3D Interactive Card Tilt
      const rotY = deltaX * 22;
      const rotX = -deltaY * 22;
      cardItem.classList.remove('floating'); // Stop idle float during active hover
      cardItem.style.transform = `translate3d(0, 0, 120px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.1, 1.1, 1.1)`;

      // Dynamic Holographic Sheen & Glare
      const glareX = 50 + deltaX * 50;
      const glareY = 50 + deltaY * 50;
      cardGlareHotspot.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)`;
      cardHoloLayer.style.backgroundPosition = `${glareX}% ${glareY}%`;
      cardHoloLayer.style.opacity = `${0.45 + Math.abs(deltaX * 0.4) + Math.abs(deltaY * 0.4)}`;
    }
  }

  function handlePointerLeave() {
    if (state === 'IDLE') {
      packWrapper.style.transform = 'rotateX(0deg) rotateY(0deg)';
      packFoilGlare.style.background = '';
    } else if (state === 'REVEALED') {
      cardItem.style.transform = 'translate3d(0, 0, 100px) rotateX(0deg) rotateY(0deg)';
      cardItem.classList.add('floating');
      cardHoloLayer.style.opacity = '0.4';
      cardGlareHotspot.style.opacity = '0.3';
    }
  }

  // Render Collection Binder Grid
  function renderBinder() {
    binderGrid.innerHTML = '';
    CARDS_DATA.forEach(card => {
      const isUnlocked = unlockedCards.has(card.id);
      const slot = document.createElement('div');
      slot.className = `binder-item ${isUnlocked ? 'unlocked' : 'locked'}`;
      if (isUnlocked) {
        slot.style.borderColor = card.colorTheme.primary;
        slot.style.boxShadow = `0 4px 18px ${card.colorTheme.glow || 'rgba(0,0,0,0.4)'}`;
      }
      slot.innerHTML = `
        <div class="binder-item-thumb">
          ${isUnlocked ? card.svgArt : '<span style="font-size: 32px; opacity: 0.3;">🔒</span>'}
        </div>
        <div class="binder-item-name">${isUnlocked ? card.name : '??? Locked'}</div>
        <div class="binder-item-rarity" style="color: ${isUnlocked ? (card.colorTheme.primary || '#fff') : '#64748b'}">
          ${card.rarity.toUpperCase()}
        </div>
      `;

      if (isUnlocked) {
        slot.addEventListener('click', () => {
          binderModal.classList.remove('active');
          setupCardDisplay(card);
          // Show directly in 3D inspect view
          state = 'REVEALED';
          boosterPack.classList.add('wrapper-drop', 'ripped');
          cardItem.classList.remove('anim-emerge');
          cardItem.classList.add('revealed', 'floating');
          btnResetPack.classList.add('visible');
          btnOpenPack.style.display = 'none';
          soundFX.playCardSnap();
        });
      }

      binderGrid.appendChild(slot);
    });
  }

  // Event Listeners
  btnOpenPack.addEventListener('click', () => startPackOpening());
  packWrapper.addEventListener('click', () => {
    if (state === 'IDLE') startPackOpening();
  });

  btnResetPack.addEventListener('click', () => resetPack());

  // Sound Toggle
  btnSoundToggle.addEventListener('click', () => {
    soundFX.ensureContext();
    const isMuted = soundFX.toggleMute();
    soundIcon.textContent = isMuted ? '🔇' : '🔊';
    btnSoundToggle.classList.toggle('muted', isMuted);
  });

  // Binder Modal
  btnOpenBinder.addEventListener('click', () => {
    renderBinder();
    binderModal.classList.add('active');
  });

  btnCloseBinder.addEventListener('click', () => {
    binderModal.classList.remove('active');
  });

  binderModal.addEventListener('click', (e) => {
    if (e.target === binderModal) {
      binderModal.classList.remove('active');
    }
  });

  // Pointer / 3D Tracking
  stageContainer.addEventListener('mousemove', handlePointerMove);
  stageContainer.addEventListener('mouseleave', handlePointerLeave);
  stageContainer.addEventListener('touchmove', handlePointerMove, { passive: true });
  stageContainer.addEventListener('touchend', handlePointerLeave);

  // Initialize
  loadCollection();
});
