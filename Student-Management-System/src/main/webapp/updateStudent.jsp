<!DOCTYPE html>
<html>
<head>
    <title>Edit Student</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <h2>Edit Student</h2>
    <form action="update" method="post">
        <input type="hidden" name="id" value="${student.stud_id}">
        <label>Student Name</label>
        <input type="text" name="studname" value="${student.stud_name}" required>
        <label>Marks</label>
        <input type="text" name="marks" value="${student.marks}" required>
        <label>Skill</label>
        <input type="text" name="skill" value="${student.skill}" required>
        <input type="submit" value="Update">
    </form>
</body>
</html>
