CREATE TABLE `questions` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question_text TEXT NOT NULL
);

CREATE TABLE `answers` (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  question_id INT NOT NULL,
  answer_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL,
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO `questions` (question_text) VALUES
  ('What is the capital of France?'),
  ('Who directed the movie Jaws?');

INSERT INTO `answers` (question_id, answer_text, is_correct) VALUES
  (1, 'Paris', true),
  (1, 'London', false),
  (1, 'Madrid', false),
  (2, 'Steven Spielberg', true),
  (2, 'Alfred Hitchcock', false),
  (2, 'Martin Scorsese', false);
