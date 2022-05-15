SELECT
    stdFirstName, stdLastName, StdAge, GroupName, FacName
FROM
    student
LEFT JOIN 
    stdGroup 
ON 
    student.GroupNo = stdGroup.id
LEFT JOIN 
    faculty
ON
    stdGroup.FacNo = faculty.id
WHERE
    FacName = 'Design';