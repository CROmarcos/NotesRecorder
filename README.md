# Notes Recorder
Notes Recorder is an application made for writing notes and exporting them to local storage as an image. Every note has a title, description and date of creation, as well as date of last modification, if modified later. Notes can be marked as favorite.

## Run the application
To start the application, open command prompt or VS Code integrated terminal and type **npm start**. The application will open in default browser, on localhost port 3000.

## Use the application
Default page, or homepage, shows the list of notes already stored. If no notes are written before, the page is blank. All actions except creating new note are listed inside the note card, on the top right corner.

### Create new note
Pressing button **Add a note**, a blank note card is shown. This card has empty fields to input title and description of the note. Date of creation is automatically set to time when the note is created.

### Edit existing note
Fountain pen icon opens selected note with current title and description, where it is possible to change them. Saving changes automatically sets modification date.

### Delete note
Trash can icon near the fountain pen deletes selected note and removes it from page.

### Mark note as important
A note is not important by default. It can be marked as important by pressing the heart icon top right. Red heart signifies important notes, while white heart signifies these which are not. It is possible to select only important notes to be shown by marking checkbox near the text **Show only important notes**.

### Set alarm
Clock icon opens form for setting alarm at scheduled time. At the time there is shown an alert containing titles of all notes with alarm at that time. Selecting option **OK, done**, alarms are closed, while selecting option **Later** alarms stay active. It is always possible to cancel alarm before scheduled time.

### Export note as image
Printer icon at the bottom of note card opens a new page which shows selected note ready for printing. Pressing button **Download note**, the note is saved to local storage as a .png image.

#### Icons interpretation
&ensp;
![Edit note](src/images/pen.png?raw=true)
&emsp;&emsp;
![Delete note](src/images/trashcan.png?raw=true)
&emsp;&emsp;&emsp;&ensp;
![Important note](src/images/heart.png?raw=true)
&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;
![Unimportant note](src/images/emptyheart.png?raw=true)
&emsp;&emsp;&emsp;&emsp;&ensp;
![Unimportant note](src/images/alarm.png?raw=true)
&emsp;&ensp;
![Print note](src/images/printer.png?raw=true)
<br>
edit note&emsp;delete note&emsp;note is important&emsp;note is not important&emsp;set alarm&emsp;export note
