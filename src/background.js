import './css/animations.css'

export function backgroundShifter() {
    const pauseMS = 4000;

    if (backgroundShifter.bgElement === undefined) {
        backgroundShifter.bgElement = document.querySelector("#backgroundImage");
        backgroundShifter.filePath = "assets/images/backgrounds";
    }

    setTimeout(() => {
        backgroundShifter.bgElement.classList.add("fadeOut");
        document.querySelector(".fadeOut").onanimationend = () => {
            backgroundShifter.bgElement.classList.remove("fadeOut");
            backgroundShifter.bgElement.style.backgroundImage = `url("${backgroundShifter.filePath}/bg${getShiftID()}.jpg")`
            backgroundShifter.bgElement.classList.add("fadeIn");
            document.querySelector(".fadeIn").onanimationend = () => {
                backgroundShifter.bgElement.classList.remove("fadeIn");
                backgroundShifter();
            };
        }
    }, pauseMS);
};

function getShiftID() {
    if (getShiftID.backgroundID === undefined) {
        const startingBackgroundID = 2; // starts at 2 since 1 is the first that's preloaded
        getShiftID.maxImages = 5;
        getShiftID.backgroundID = startingBackgroundID;
    }

    else
        getShiftID.backgroundID = ((getShiftID.backgroundID + 1) % getShiftID.maxImages) + 1

    return getShiftID.backgroundID;

}