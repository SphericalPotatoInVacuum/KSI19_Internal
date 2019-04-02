class Shell {
    constructor(path, r, g, b) {
        this.path = path;
        this.color = [r, g, b];
        this.revert(r, g, b);
    }

    flash(r, g, b, time) {
        if (!time) {
            time = 480;
        }
        this.path.style.setProperty('transition', 'fill 5ms linear');
        this.path.setAttributeNS(null, 'fill', `rgba(${r}, ${g}, ${b}, 0.7)`);
        setTimeout(() => {
            this.revert(...this.color, time);
        }, 40);
    }

    revert(r, g, b, time) {
        this.path.style.setProperty('transition', `fill ${time}ms ease`);
        this.path.setAttributeNS(null, 'fill', `rgba(${r}, ${g}, ${b}, 0.0)`);
    }
}