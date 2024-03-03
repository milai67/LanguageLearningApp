class LanguageLearningApp {
  constructor() {
    this.languages = [];
    this.currentLanguage = null;
    this.lessonProgress = 0;
  }

  addLanguage(language) {
    this.languages.push(language);
  }

  selectLanguage(language) {
    this.currentLanguage = language;
    this.lessonProgress = 0;
  }

  startLesson() {
    if (this.currentLanguage && this.lessonProgress < this.currentLanguage.lessonCount) {
      const lesson = this.currentLanguage.getLesson(this.lessonProgress);
      lesson.start();
      this.lessonProgress++;
    } else {
      console.log("Please select a language and ensure there are more lessons available.");
    }
  }

  completeLesson() {
    if (this.currentLanguage && this.lessonProgress > 0 && this.lessonProgress <= this.currentLanguage.lessonCount) {
      const lesson = this.currentLanguage.getLesson(this.lessonProgress - 1);
      lesson.complete();
    } else {
      console.log("Please select a language and ensure there is an ongoing lesson.");
    }
  }
}

class Language {
  constructor(name) {
    this.name = name;
    this.lessons = [];
  }

  addLesson(lesson) {
    this.lessons.push(lesson);
  }

  getLesson(index) {
    return this.lessons[index];
  }

  get lessonCount() {
    return this.lessons.length;
  }
}

class Lesson {
  constructor(name) {
    this.name = name;
  }

  start() {
    console.log(`Starting lesson: ${this.name}`);
  }

  complete() {
    console.log(`Completed lesson: ${this.name}`);
  }
}

// 创建一个LanguageLearningApp实例
const app = new LanguageLearningApp();

// 创建两种语言
const english = new Language("English");
const spanish = new Language("Spanish");

// 创建几个课程
const englishLesson1 = new Lesson("Introduction to English");
const englishLesson2 = new Lesson("Grammar");
const spanishLesson1 = new Lesson("Introducción al español");

// 将课程添加到相应的语言中
english.addLesson(englishLesson1);
english.addLesson(englishLesson2);
spanish.addLesson(spanishLesson1);

// 将语言添加到应用程序中
app.addLanguage(english);
app.addLanguage(spanish);

// 选择一种语言
app.selectLanguage(english);

// 开始课程
app.startLesson(); // Starting lesson: Introduction to English

// 完成课程
app.completeLesson(); // Completed lesson: Introduction to English
