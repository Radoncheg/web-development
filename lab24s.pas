PROGRAM WorkWithQueryString(INPUT, OUTPUT);
uses Dos;

FUNCTION GetQueryStringParameter(Key:STRING):STRING;
VAR
  Str: STRING;
BEGIN
  Str := GetEnv('QUERY_STRING');
  IF Pos(Key, Str) = 0
  THEN
    WRITE('Введите параметр')
  ELSE
    BEGIN
      Delete(Str, 1, Pos(Key, Str) + Length(Key));
      IF Pos('?', Str) <> 0
      THEN
        Delete(Str, Pos('?', Str), Length(Str) - Pos('?',Str) + 1);
     WRITE(Str)
    END
END;

BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.
