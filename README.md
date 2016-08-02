# Models
* `documentModel`
```js
  title: '', 
  author: '', 
  text: [],
  read: false,
  confirmedRead: false
```
# Collections
* `UnreadCollection` documents with a state of `{ read: false, confirmedRead: false }`
* `ReadCollection` documents with a state of `{ read: true, confirmedRead: false }`

# Views
##ListView
*  shows 2 components: `<ReadList />` and `<UnreadList />`
* each fetches documents from their respective collection 
* each list item has an event listener that fires its helper function `openDoc()`,
* `openDoc()`changes the state of the document to `read:true` - adding it to the ReadCollection
* `openDoc()` then, opens that document in the Read View

## ReadView
* shows 2 components: `<DocHead />` and `<DocBody />` 
* `<DocHead />` shows the title and author along with a **"Mark Read"** button, which contains an event listener that triggers it's helper function, `openConfirm()` — which opens the Confirm View. 
* There is no "close" button on the Read View. Once a document is been opened, it becomes a "read" document. You 

## ConfirmView (a modal confirmation dialog)
* option to either check YES to confirm - changing state to `{confirmedRead:true}`  - removing it from both collections,
* Or No, keeping it in a state of `{read:true, confirmedRead:false}` - basically a "read later" sort of thing. 

![](https://s31.postimg.org/w3ua22yrf/Doc_8_2_16_9_08_AM_copy.jpg)
___
##Practice using state with React

* Create a document reader app, 
* that allows users to read a document and mark that document as read.
* Use a checkbox to allow a user to mark a document as read
* When the user checks the checkbox, it should become checked 
* AND they should be prompted to confirm whether they truly read the document (perhaps with a modal)
* If they confirm, the box should remain checked AND become disabled.
* If they cancel, the box should go back to being unchecked.
