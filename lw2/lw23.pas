PROGRAM HelloDear(INPUT, OUTPUT);
Uses Dos;
VAR
  S: STRING;
BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  S := GetEnv('QUERY_STRING');
  S := Copy(S, 6, (Length(S)-5));
  IF Length(S) = 0
  THEN
    WRITELN('Hello, Anonymous!')
  ELSE
    WRITELN('Hello, ', S)
END.
