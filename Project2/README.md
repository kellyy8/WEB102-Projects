# Web Development Project 3 - *Guessing Game: Thowback to Childhood Days! [Part 2]*

Submitted by: **Kelly Yu**

This web app: **contains 22 flashcards that match the descriptions of kids' shows to their names.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can enter their guess in a box before seeing the flipside of the card**
- [x] **Clicking on a submit button shows visual feedback about whether the answer was correct or incorrect**
- [x] **A back button is displayed on the card and can be used to return to the previous card in a set sequence**
- [x] **A next button is displayed on the card and can be used to navigate to the next card in a set sequence**

The following **optional** features are implemented:

- [x] A shuffle button is used to randomize the order of the cards
- [ ] A user's answer may be counted as correct even when it is slightly different from the target answer
- [x] A counter displays the user's current and longest streak of correct responses
- [ ] A user can mark a card that they have mastered and have it removed from the pool of answers as well as added to a list of mastered cards

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!
  * [x] User can only gain 1 point from the current card they are guessing the answer to, so their streak accumulates reasonably.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS.

## Notes

Describe any challenges encountered while building the app.
- Figuring out how to randomize the set sequence whenever the user shuffles the cards. Searched for JavaScript built-in functions to random the elements in an Array, but there is no such function, so opted for a commonly used algorithm: Fisher-Yates Shuffle. Needed to learn the Array functions to understand how to implement the algorithnm. Crossed reference with the sample project to confirm when the new sequence would be revealed (upon a click on the prev or next buttons).

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.