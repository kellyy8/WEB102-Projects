# Web Development Project 2 - *Guessing Game: Thowback to Childhood Days!*

Submitted by: **Kelly Yu**

This web app: **contains 22 flashcards that match a kids' show's description to its name.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contains images in addition to or in place of text
- [x] Cards have different visual styles such as color based on their category
  - [x] Cards have different colors based on the TV channel category.

The following **additional** features are implemented:

* [x] When the user hovers over the card, the card is surrounded by a shadow to indicate that it is an interactive component.
* [x] When the user clicks on the card, the card flips to review either the answer or the prompt.

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./2FlashcardsPt1/Kapture 2024-09-30 at 00.12.58.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS.

## Notes

Describe any challenges encountered while building the app.
* Deciding on which properties to use and what values to assign to them to create a shadow around the card when the user hovers over it, and to animate the card so it seems like it flips when the user clicks on it. Learned how to use `box-shadow`, `transition`, and `transform` CSS properties.
* Getting the card to reset its states, particularly its `showAnswer` state to `false`, whenever a new card is shown. Updated the `key` prop for the Flashcard component to achieve this.
* Figuring out how to organize the information, particularly whether to define the list of cards inside the `App` component or the  `Flashcard` component. Ended up choosing the `App` component because I needed the cards information to display on the homepage the total number of cards and a next button that changes the card's content (prompt and answer). I passed the displayed card's information to the card via props.

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