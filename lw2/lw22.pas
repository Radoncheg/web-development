PROGRAM SarahRevere(INPUT, OUTPUT);
{����� ᮮ�饭�� � ⮬ ��� ���� ��⠭��, � ����ᨬ���
�� ⮣�, ���� �� �室� ����砥��� 'land' ��� 'sea'.}
uses Dos;
BEGIN {SarahRevere}
  WRITELN('Content-Type: text/plain');
  WRITELN;
  WRITELN(GetEnv('QUERY_STRING'));
  IF GetEnv('QUERY_STRING') = 'Lanterns=1'
  THEN
    WRITELN('The British are coming by land.')
  ELSE
    WRITELN('The British coming by sea.')
END.  {Sarah revere}
