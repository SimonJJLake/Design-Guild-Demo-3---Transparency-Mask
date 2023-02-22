# Design Guild Demo 3 - Transparency Mask
<img width="1504" alt="image" src="https://user-images.githubusercontent.com/113339746/220652928-60b84a93-3e09-4159-8748-18b604681b1d.png">
A quick demonstration of a shape that follows the mouse and hides the fill colour of text. A basic CSS recreation of a Three.js effect shown on https://crosswire.io/
<img width="914" alt="image" src="https://user-images.githubusercontent.com/113339746/220704495-76bc6880-2cef-4a4d-8717-d69f06e5c63d.png">
This demo was constructed by using the mix-blend-mode screen property. When using a greyscale layer with this blend mode, its brightness corresponds to its transparency - white is fully visible, black is fully transparent.
By displaying a blurred black object that follows the mouse over the top of the white text, this becomes a transparent window to the image underneath. 
More detail on screen and other blend modes can be found here: https://en.wikipedia.org/wiki/Blend_modes#Multiply_and_Screen
