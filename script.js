const image = document.getElementById("image");
let initialState = true;
const handleImage = () => {
    if (initialState) {
        image.src = "asset/pic_bulbon.gif";
    } else {
        image.src = "asset/pic_bulboff.gif";
    }
    initialState = !initialState;
};
