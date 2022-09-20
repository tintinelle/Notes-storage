"use strict";

const button = document.getElementById('btnNewNote');

let notes = [];
let newNoteText = document.getElementById('noteTextarea').value;

const allNotes = document.getElementById('allNotes');

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
            optionsNote += `<div>${note}</div>`;
        }

        allNotes.innerHTML = optionsNote;
    }
};

const addNote = () => {
    newNoteText = document.getElementById('noteTextarea').value;

    console.log(newNoteText);

    // добавляем текст заметки в массив заметок
    notes.push(newNoteText);
    console.log(notes);

    // делаем из массива строку и добавляем в локальное хранилище:
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(` строка ${notes}`);

    // отправляем в функцию, которая отвечает за отображение:
    generateNotes();
};

button.addEventListener('click', addNote);