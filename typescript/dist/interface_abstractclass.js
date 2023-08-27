"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    cookStory() {
        console.log("story cooked");
    }
}
class TakeVideo {
    constructor(mode) {
        this.mode = mode;
    }
    cookStory() {
        console.log("Video Taken");
    }
}
class YouTube extends TakeVideo {
}
const youtube = new YouTube("M");
youtube.cookStory();
//# sourceMappingURL=interface_abstractclass.js.map