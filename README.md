# IDEA9103 Major Project Individual Part
Tomas Lee tlee03037

# Individual Approach

## How to interact with the artwork
To interact with the artwork load the index.html page in your web browser and the animation will automatically play.<br>
One full loop of the artwork will take roughly 27 seconds from opening of the browser. However it is set to loop infinitely.

## Chosen animation style
The animation I have chosen to use is time. I have interpreted the original artwork "Wheels of Fortune" as representing opportunities, and through time I was interested in exploring how opportunities exist in our lives.

## What is animated
I have animated the main rings of artwork. The animation will cause the rings to fade in and out sequentially at set intervals and will loop infinitely.

## Inspiration

### Wheel of Fortune Tarot Card
As the namesake of the original artwork, I drew insipiration from the idea of the Wheel of Fortune tarot card. The Wheel of Fortune tarot card is typically interpreted with ideas of destiny and turning points in life.
I have interpreted the idea of each wheel representing an opportunity that may come to us during our lifetime.
<br>![Wheel of Fortune](<9103 final/assets/RWS_Tarot_10_Wheel_of_Fortune.jpg>)</br>
<sub>Taken from Wikipedia https://en.wikipedia.org/wiki/Wheel_of_Fortune_(tarot_card)</sub>

### Rock Pools and Tide Pools
Another source of inspiration was Rock Pools/Tide Pools.<br>
The artwork and our final design reminded me greatly of Rock Pools that you would find at the beach. Once specific Tide Pool is the La Jolla tide pool located in California.

The ellipse and circles that surrounded our main rings reminded of paths you could walk around the depressions in a rock pool that is filled with water. At low tide the paths are revealed for people to walk across and during high tide they are hidden from view.

<br>![La Jolla Tide Pool by Brent Bremer](<9103 final/assets/La-Jolla-Sunset-768x526.jpg>)</br>
<sub>Photographed by Brent Bremer http://brentbremer.com/la-jolla/</sub>

### Meaning 
Overall through the two ideas of the Wheel of Fortune and Rock Pools I decided to create a time based artwork that would have the main circles disappear at set intervals. Each circle represents an opportunity or a turning point we are met with, over time these opportunities are either taken or missed, hence the disappearing rings. While the surrounding ellipse and circles represent the paths we take in life, there are many paths we can take that are all interconnected and there is never a wrong path. The return of the circles symbolise the idea that even though past opportunities are gone, new ones appear. 

# Technical Explanation
## Variables
New variables were added in the beginning:
- fadeDelay
- ringIndex
- fadeDirection

These variables were used to track how many frames to wait between each ring to begin fading, an index to determine what ring is currently being modified and whether we are fading a ring out or in respectively to reverse the process

![Variables](<9103 final/assets/Screenshot 2025-06-12 at 7.16.34 pm.png>)

## Setup
Within the setup function, a new line was added to start the rings with an opacity of 0 so that they fade in

![Setup Function](<9103 final/assets/Screenshot 2025-06-12 at 7.17.13 pm.png>)

## Draw
In the draw function I have updated the code to start the fade sequence.

Time is tracked through the use of [frameCount](https://p5js.org/reference/p5/frameCount/) which tracks the number of frames drawn since the sketch started. When frameCount reaches the value set by frameDelay the fade updates and we then move to the next ring and increment the ring index, this is checked against how many rings are made. Then once a full cycle is reached, we reverse the direction of the fade to bring the circles back.

A for loop is used to update the ring opacities. Based on the current ring being modified, the opacity is changed and is also ensures that the opacity can only be within 0 (transparent) and 1 (visible).

Finally the rings are drawn. The if statement is used to skip drawing the fully transparent rings. [drawingContext](https://p5js.org/reference/p5/drawingContext/) is used to access the Alpha property of the ring object to update the opacity, while push and pop ensures it is only applied to the rings.

![Draw Function](<9103 final/assets/Screenshot 2025-06-12 at 7.17.42 pm.png>)

## Class
Finally, in the ring class, a new property is added, opacity to allow control over the opacity.

![Ring Class](<9103 final/assets/Screenshot 2025-06-12 at 7.17.56 pm.png>)


