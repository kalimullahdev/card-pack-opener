// Sound FX Generator using Web Audio API (Zero external assets required)

class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  ensureContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    return this.muted;
  }

  // Pack Shake / Energy Charging Hum
  playPackShake() {
    if (this.muted) return;
    this.ensureContext();
    const t = this.ctx.currentTime;

    // Sub rumble oscillator
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(45, t);
    osc.frequency.exponentialRampToValueAtTime(140, t + 0.4);

    // Filter to give it muffled pack reverberation
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(180, t);
    filter.frequency.exponentialRampToValueAtTime(400, t + 0.4);

    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.2, t + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.45);
  }

  // Realistic Crisp Foil Tear Sound (Filtered noise + envelope)
  playFoilTear() {
    if (this.muted) return;
    this.ensureContext();
    const t = this.ctx.currentTime;
    const duration = 0.35;

    // Create noise buffer for tearing texture
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Pink/granular noise
      data[i] = (Math.random() * 2 - 1) * (Math.random() > 0.3 ? 1 : 0.2);
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Highpass filter for crisp metallic foil ripping crunch
    const highpass = this.ctx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(1200, t);
    highpass.frequency.exponentialRampToValueAtTime(3200, t + duration);

    // Peaking filter for tearing crinkle
    const peak = this.ctx.createBiquadFilter();
    peak.type = 'peaking';
    peak.frequency.setValueAtTime(4500, t);
    peak.Q.setValueAtTime(3, t);
    peak.gain.setValueAtTime(12, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.4, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.01, t + duration);

    noise.connect(highpass);
    highpass.connect(peak);
    peak.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + duration);

    // Add a secondary snap pop
    const snapOsc = this.ctx.createOscillator();
    const snapGain = this.ctx.createGain();
    snapOsc.type = 'triangle';
    snapOsc.frequency.setValueAtTime(600, t + 0.05);
    snapOsc.frequency.exponentialRampToValueAtTime(80, t + 0.15);
    snapGain.gain.setValueAtTime(0.25, t + 0.05);
    snapGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

    snapOsc.connect(snapGain);
    snapGain.connect(this.ctx.destination);
    snapOsc.start(t + 0.05);
    snapOsc.stop(t + 0.16);
  }

  // Smooth Card Slide / Whoosh Out of Pack
  playCardSlide() {
    if (this.muted) return;
    this.ensureContext();
    const t = this.ctx.currentTime;
    const duration = 0.55;

    // Filtered noise swoosh
    const bufferSize = this.ctx.sampleRate * duration;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(300, t);
    bandpass.frequency.exponentialRampToValueAtTime(1600, t + duration * 0.7);
    bandpass.frequency.exponentialRampToValueAtTime(600, t + duration);
    bandpass.Q.setValueAtTime(2.5, t);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, t);
    gain.gain.linearRampToValueAtTime(0.3, t + 0.25);
    gain.gain.exponentialRampToValueAtTime(0.001, t + duration);

    noise.connect(bandpass);
    bandpass.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(t);
    noise.stop(t + duration);
  }

  // Card Flip / Holo Catch
  playCardFlip() {
    if (this.muted) return;
    this.ensureContext();
    const t = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(880, t + 0.12);

    gain.gain.setValueAtTime(0.2, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.14);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(t);
    osc.stop(t + 0.15);
  }

  playCardSnap() {
    this.playCardFlip();
  }

  // Fanfare / Reveal Jingle tuned per Rarity
  playFanfare(rarity) {
    if (this.muted) return;
    this.ensureContext();
    const t = this.ctx.currentTime;

    if (rarity === 'common') {
      this._playTone(523.25, t, 0.2, 'sine', 0.2); // C5
      this._playTone(659.25, t + 0.12, 0.35, 'sine', 0.2); // E5
      this._playTone(783.99, t + 0.24, 0.5, 'triangle', 0.25); // G5
    } else if (rarity === 'rare') {
      const notes = [440, 554.37, 659.25, 880]; // A4, C#5, E5, A5
      notes.forEach((freq, idx) => {
        this._playTone(freq, t + idx * 0.09, 0.45, 'triangle', 0.22);
      });
    } else if (rarity === 'epic') {
      const notes = [392, 493.88, 587.33, 783.99, 987.77, 1174.66]; // G chord shimmer
      notes.forEach((freq, idx) => {
        this._playTone(freq, t + idx * 0.08, 0.6, 'sine', 0.25);
        this._playTone(freq * 1.5, t + idx * 0.08 + 0.02, 0.4, 'triangle', 0.1);
      });
    } else if (rarity === 'legendary') {
      // Golden Royal Fanfare
      const chords = [
        { f: [261.63, 329.63, 392.00], delay: 0, dur: 0.3 },
        { f: [329.63, 392.00, 523.25], delay: 0.16, dur: 0.3 },
        { f: [392.00, 523.25, 659.25], delay: 0.32, dur: 0.4 },
        { f: [523.25, 659.25, 783.99, 1046.50], delay: 0.5, dur: 1.2 }
      ];
      chords.forEach(chord => {
        chord.f.forEach(freq => {
          this._playTone(freq, t + chord.delay, chord.dur, 'sawtooth', 0.12, true);
          this._playTone(freq, t + chord.delay, chord.dur, 'sine', 0.2);
        });
      });
    } else if (rarity === 'mythic') {
      // Celestial Cosmic Symphony
      const cosmicNotes = [523.25, 659.25, 783.99, 987.77, 1174.66, 1318.51, 1567.98, 2093.00];
      cosmicNotes.forEach((freq, idx) => {
        this._playTone(freq, t + idx * 0.06, 0.8 - idx * 0.04, 'sine', 0.2);
        this._playTone(freq * 1.005, t + idx * 0.06, 0.8, 'triangle', 0.15); // Chorused shimmer
      });
      // Deep sub resonance bass
      this._playTone(130.81, t, 1.4, 'sine', 0.35);
      this._playTone(65.41, t, 1.8, 'sine', 0.3);
    }
  }

  _playTone(freq, startTime, duration, type = 'sine', volume = 0.2, filterLow = false) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    if (filterLow) {
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, startTime);
      osc.connect(filter);
      filter.connect(gain);
    } else {
      osc.connect(gain);
    }

    gain.connect(this.ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }
}

const soundFX = new SoundFX();
