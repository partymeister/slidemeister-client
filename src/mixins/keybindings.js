export default {
    created() {
        window.addEventListener('keydown', this.addListener, false);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.addListener, false);
    },
    methods: {
        addListener(e) {
            switch (e.key) {
                case 'F1':
                    this.playJingle('jingle_1');
                    e.preventDefault();
                    break;
                case 'F2':
                    this.playJingle('jingle_2');
                    e.preventDefault();
                    break;
                case 'F3':
                    this.playJingle('jingle_3');
                    e.preventDefault();
                    break;
                case 'F4':
                    this.playJingle('jingle_4');
                    e.preventDefault();
                    break;
            }

            if (e.key === 'c') {
                this.$eventHub.$emit('show-configuration');
                window.removeEventListener('keydown', this.addListener, false);
            }

            if (e.key === 'd') {
                e.preventDefault();
                let debugWindow = document.querySelector('.debug');
                if (debugWindow.className.match(/\bd-none\b/)) {
                    debugWindow.classList.remove('d-none');
                    document.querySelector('.main').style.cursor = 'inherit';
                } else {
                    debugWindow.classList.add('d-none');
                    document.querySelector('.main').style.cursor = 'none';
                }
            }

            if (this.playlist.id !== undefined) {
                if (e.code === 'Space' && this.items[this.currentItem].slide_type === 'siegmeister_bars') {
                    e.preventDefault();
                    this.renderPrizegivingBars();
                }
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    if (this.playNow && this.items.length > 0) {
                        // console.log("Playnow is active - reverting to previous playlist");
                        this.clearPlayNowAfter = true;
                    } else if (this.playNow) {
                        // Do nothing if there is ONLY a playnow slide and nothing else
                        return;
                    }
                }
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    if (e.shiftKey) {
                        // Hard transition
                        this.seekToNextItem(true)
                    } else {
                        // Soft transition
                        this.seekToNextItem(false)
                    }
                }
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    if (e.shiftKey) {
                        // Hard transition
                        this.seekToPreviousItem(true)
                    } else {
                        // Soft transition
                        this.seekToPreviousItem(false)
                    }
                }
            }
        }
    }
}
