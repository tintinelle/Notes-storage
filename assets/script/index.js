"use strict";

const button = document.getElementById('btnNewNote');

let notes = [];
let newNoteText = document.getElementById('noteTextarea').value;

const allNotes = document.getElementById('allNotes');
const error = document.getElementById('error');

// отображаем заметки при прогрузке страницы
document.addEventListener("DOMContentLoaded", function (event) {
    generateNotes();
});

// расчехляем строку с массивом из хранилища и засовываем элементы в div со всеми заметками
const generateNotes = () => {
    let optionsNote = "";

    console.log (localStorage.getItem('notes'));

    if (localStorage.getItem('notes') !== null) {
        notes = JSON.parse(localStorage.getItem('notes'));

        for (let note of notes) {
            optionsNote += `<div class="note">${note}</div>`;
        }

        allNotes.innerHTML = optionsNote;
    }
};

const addNote = () => {
    let errors = [];
    newNoteText = document.getElementById('noteTextarea').value;

    console.log(newNoteText);
    console.dir(document.getElementById('noteTextarea'));

    let validity = document.getElementById('noteTextarea').validity;

    if (validity.valueMissing) {
        errors.push('Заметка пустая!');
        error.innerHTML = `${errors}<br/>`;
    }
    // добавляем текст заметки в массив заметок
    else {  
        error.innerHTML = ``;  
        notes.push(newNoteText);
    }

    console.log(notes);

    // делаем из массива строку и добавляем в локальное хранилище:
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(` строка ${notes}`);

    // отправляем в функцию, которая отвечает за отображение:
    generateNotes();
};

button.addEventListener('click', addNote);