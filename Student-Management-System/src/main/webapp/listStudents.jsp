<%@ page import="java.util.List"%>
<%@taglib prefix="c" uri="jakarta.tags.core"%>
<!DOCTYPE html>
<html>
<head>
<title>List of Students</title>
<link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
	<h2>List of Students</h2>
	<a href="new">Add New Student</a>
	<table>
		<thead>
			<tr>
				<th>Student Name</th>
				<th>Marks</th>
				<th>Skill</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="student" items="${listStudent}">
				<tr>
					<td>${student.stud_name}</td>
					<td>${student.marks}</td>
					<td>${student.skill}</td>
					<td><a href="edit?id=${student.stud_id}">Edit</a> <a
						href="delete?id=${student.stud_id}">Delete</a></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
</body>
</html>
