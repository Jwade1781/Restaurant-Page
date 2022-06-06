let i = 1;

export function backgroundShifter(){
    const FILE_PATH = "assets/images/backgrounds";
    const DEBUG = true;
    if (document.readyState === "complete") {
        DEBUG ? document.body.style.backgroundImage = `url("${FILE_PATH}/bg1.jpg")` : document.body.style.backgroundImage = `url("${FILE_PATH}/bg${i}.jpg")`
    }
    i = ((i + 1) % 5) + 1;
};