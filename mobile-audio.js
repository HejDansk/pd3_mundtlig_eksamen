// Mobile Audio Player Controller
// This script handles the synchronization between desktop and mobile audio player elements

class MobileAudioController {
    constructor() {
        this.initializeMobileElements();
        this.setupEventListeners();
    }

    initializeMobileElements() {
        // Get references to both desktop and mobile elements
        this.desktopElements = {
            playPauseBtn: document.getElementById('play-pause-btn'),
            playIcon: document.getElementById('play-icon'),
            pauseIcon: document.getElementById('pause-icon'),
            currentTime: document.getElementById('current-time'),
            duration: document.getElementById('duration'),
            progressBar: document.getElementById('progress-bar'),
            currentTrack: document.getElementById('current-track'),
            speedControl: document.getElementById('speed-control')
        };

        this.mobileElements = {
            playPauseBtn: document.getElementById('play-pause-btn-mobile'),
            playIcon: document.getElementById('play-icon-mobile'),
            pauseIcon: document.getElementById('pause-icon-mobile'),
            currentTime: document.getElementById('current-time-mobile'),
            duration: document.getElementById('duration-mobile'),
            progressBar: document.getElementById('progress-bar-mobile'),
            currentTrack: document.getElementById('current-track-mobile'),
            speedControl: document.getElementById('speed-control-mobile')
        };
    }

    setupEventListeners() {
        // Sync mobile play/pause button with desktop
        this.mobileElements.playPauseBtn?.addEventListener('click', () => {
            this.desktopElements.playPauseBtn?.click();
        });

        // Sync mobile speed control with desktop
        this.mobileElements.speedControl?.addEventListener('change', (e) => {
            if (this.desktopElements.speedControl) {
                this.desktopElements.speedControl.value = e.target.value;
                this.desktopElements.speedControl.dispatchEvent(new Event('change'));
            }
        });

        // Create a mutation observer to watch for changes in desktop elements
        this.setupDesktopWatcher();
    }

    setupDesktopWatcher() {
        // Watch for changes in play/pause icons
        const iconObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    this.syncPlayPauseIcons();
                }
            });
        });

        // Observe both desktop play and pause icons
        if (this.desktopElements.playIcon) {
            iconObserver.observe(this.desktopElements.playIcon, { attributes: true });
        }
        if (this.desktopElements.pauseIcon) {
            iconObserver.observe(this.desktopElements.pauseIcon, { attributes: true });
        }

        // Watch for text content changes in time and track elements
        const textObserver = new MutationObserver(() => {
            this.syncTextElements();
        });

        [this.desktopElements.currentTime, this.desktopElements.duration, this.desktopElements.currentTrack].forEach(element => {
            if (element) {
                textObserver.observe(element, { childList: true, characterData: true, subtree: true });
            }
        });

        // Watch for progress bar width changes
        const progressObserver = new MutationObserver(() => {
            this.syncProgressBar();
        });

        if (this.desktopElements.progressBar) {
            progressObserver.observe(this.desktopElements.progressBar, { attributes: true, attributeFilter: ['style'] });
        }

        // Watch for speed control changes
        const speedObserver = new MutationObserver(() => {
            this.syncSpeedControl();
        });

        if (this.desktopElements.speedControl) {
            speedObserver.observe(this.desktopElements.speedControl, { attributes: true, attributeFilter: ['value'] });
        }
    }

    syncPlayPauseIcons() {
        const isPlaying = this.desktopElements.playIcon?.classList.contains('hidden');
        
        if (this.mobileElements.playIcon && this.mobileElements.pauseIcon) {
            if (isPlaying) {
                this.mobileElements.playIcon.classList.add('hidden');
                this.mobileElements.pauseIcon.classList.remove('hidden');
            } else {
                this.mobileElements.playIcon.classList.remove('hidden');
                this.mobileElements.pauseIcon.classList.add('hidden');
            }
        }
    }

    syncTextElements() {
        // Sync current time
        if (this.desktopElements.currentTime && this.mobileElements.currentTime) {
            this.mobileElements.currentTime.textContent = this.desktopElements.currentTime.textContent;
        }

        // Sync duration
        if (this.desktopElements.duration && this.mobileElements.duration) {
            this.mobileElements.duration.textContent = this.desktopElements.duration.textContent;
        }

        // Sync current track
        if (this.desktopElements.currentTrack && this.mobileElements.currentTrack) {
            this.mobileElements.currentTrack.textContent = this.desktopElements.currentTrack.textContent;
        }
    }

    syncProgressBar() {
        if (this.desktopElements.progressBar && this.mobileElements.progressBar) {
            const width = this.desktopElements.progressBar.style.width;
            this.mobileElements.progressBar.style.width = width;
        }
    }

    syncSpeedControl() {
        if (this.desktopElements.speedControl && this.mobileElements.speedControl) {
            this.mobileElements.speedControl.value = this.desktopElements.speedControl.value;
        }
    }

    // Method to manually sync all elements (useful for initial sync)
    syncAll() {
        this.syncPlayPauseIcons();
        this.syncTextElements();
        this.syncProgressBar();
        this.syncSpeedControl();
    }
}

// Initialize the mobile audio controller when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.mobileAudioController = new MobileAudioController();
    
    // Perform initial sync after a short delay to ensure all elements are initialized
    setTimeout(() => {
        window.mobileAudioController.syncAll();
    }, 100);
});

// Export for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileAudioController;
}
