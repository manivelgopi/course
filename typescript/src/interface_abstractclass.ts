interface TakePhoto{
    cameraMode: string
    filter: string
    burst: number
}

interface stroy{
    cookStory(): void
}

class Instagram implements TakePhoto, stroy{
    constructor(public cameraMode: string,public filter: string, public burst: number) {
    }
    cookStory(): void {
        console.log("story cooked");
    }
}

///abstract class
abstract class TakeVideo{
    constructor(public mode: string) {
    }
    cookStory(): void {
        console.log("Video Taken");
        
    }
}

// Cannot create instance for abstract class
// only class which extends can use it
// const video1 = new TakeVideo("M");

class YouTube extends TakeVideo{
    
}
const youtube = new YouTube("M");
youtube.cookStory();








