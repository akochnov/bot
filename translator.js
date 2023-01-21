const dotenv = require("dotenv");
dotenv.config();

const translit = require("translitit-latin-to-mkhedruli-georgian");
const {Translate} = require("@google-cloud/translate").v2;

// Creates a client
const translate = new Translate();

const target = "ru";

exports.googleTranslateText = async function (text) {
    // Translates the text into the target language. "text" can be a string for
    // translating a single piece of text, or an array of strings for translating
    // multiple texts.
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];

    return translations;
};

exports.translate = async text => {

    const georgianText = translit(text);

    const translatedText = await this.googleTranslateText(georgianText);

    return translatedText[0];

};
