-- RESPONSES TABLE SEEDS --
--   Inserts four responses 1 x Manpreet, 2 x John, 1 x Jane --

INSERT INTO responses (response_id, app_id, interviewer_name, reminder_days, note) VALUES
  (11, 11, 'Interviewer 1',  7, 'some notes regarding company response'),
  (21, 21, 'Interviewer 2',  3, 'some notes regarding company response'),
  (22, 22, 'Interviewer 3', 10, 'some notes regarding company response'),
  (31, 31, 'Interviewer 1', 15, 'some notes regarding company response');
