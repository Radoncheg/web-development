PROGRAM WorkWithQueryString(INPUT, OUTPUT);
uses Dos;

FUNCTION GetQueryStringParameter(Key: STRING): STRING;
BEGIN
  IF (Key = 'first_name') AND (Key = Copy(GetEnv('QUERY_STRING'), 0, Pos('=', GetEnv('QUERY_STRING'))-1 ))
  THEN
    Key := Copy(GetEnv('QUERY_STRING'), Pos('=', GetEnv('QUERY_STRING'))+1, Length(GetEnv('QUERY_STRING')))
  ELSE
    IF (Key = 'last_name') AND (Key = Copy(GetEnv('QUERY_STRING'), 0, Pos('=', GetEnv('QUERY_STRING'))-1 ))
    THEN
      Key := Copy(GetEnv('QUERY_STRING'), Pos('=', GetEnv('QUERY_STRING'))+1, Length(GetEnv('QUERY_STRING')))
    ELSE
      IF (Key = 'age') AND (Key = Copy(GetEnv('QUERY_STRING'), 0, Pos('=', GetEnv('QUERY_STRING'))-1 ))
      THEN
        Key := Copy(GetEnv('QUERY_STRING'), Pos('=', GetEnv('QUERY_STRING'))+1, Length(GetEnv('QUERY_STRING')));
   WRITE(Key)
END;

BEGIN
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.
