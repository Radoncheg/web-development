SELECT
    first_name, last_name, age, group_name, faculty_name
FROM
    student AS s
LEFT JOIN 
    student_group AS sg
ON 
    s.group_number = sg.id
LEFT JOIN 
    faculty AS f
ON
    sg.faculty_number = f.id
WHERE
    first_name = 'Artemiy' AND last_name = 'Lebedev';