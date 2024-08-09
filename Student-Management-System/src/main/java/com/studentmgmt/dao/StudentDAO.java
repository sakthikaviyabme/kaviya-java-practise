package com.studentmgmt.dao;


import java.sql.*;
import java.util.ArrayList;
import java.util.List;

import com.studentmgmt.model.Student;

public class StudentDAO {
    private String jdbcURL = "jdbc:mysql://localhost:3306/kvcet_training";
    private String jdbcUsername = "root";
    private String jdbcPassword = "root123";

    private static final String INSERT_STUDENTS_SQL = "INSERT INTO student (stud_name, marks, skill) VALUES (?, ?, ?);";
    private static final String SELECT_STUDENT_BY_ID = "SELECT stud_id, stud_name, marks, skill FROM student WHERE stud_id = ?";
    private static final String SELECT_ALL_STUDENTS = "SELECT * FROM student";
    private static final String DELETE_STUDENTS_SQL = "DELETE FROM student WHERE stud_id = ?;";
    private static final String UPDATE_STUDENTS_SQL = "UPDATE student SET stud_name = ?, marks= ?, skill =? WHERE stud_id = ?;";

    public StudentDAO() {}

    protected Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL,jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public void insertStudent(Student student) throws SQLException {
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(INSERT_STUDENTS_SQL)) {
            preparedStatement.setString(1, student.getStud_name());
            preparedStatement.setInt(2, student.getMarks());
            preparedStatement.setString(3, student.getSkill());
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
            printSQLException(e);
        }
    }

    public Student selectStudent(int id) {
        Student student = null;
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_STUDENT_BY_ID);) {
            preparedStatement.setInt(1, id);
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                String stud_name = rs.getString("stud_name");
                Integer marks = rs.getInt("marks");
                String skill = rs.getString("skill");
                student = new Student(id,stud_name, marks, skill);
            }
        } catch (SQLException e) {
            printSQLException(e);
        }
        return student;
    }

    public List<Student> selectAllStudents() {
        List<Student> students = new ArrayList<>();
        try (Connection connection = getConnection();
             PreparedStatement preparedStatement = connection.prepareStatement(SELECT_ALL_STUDENTS);) {
            ResultSet rs = preparedStatement.executeQuery();

            while (rs.next()) {
                int id = rs.getInt("stud_id");
                String stud_name = rs.getString("stud_name");
                Integer marks = rs.getInt("marks");
                String skill = rs.getString("skill");
                students.add(new Student(id,stud_name, marks, skill));
            }
        } catch (SQLException e) {
            printSQLException(e);
        }
        return students;
    }

    public boolean deleteStudent(Integer id) throws SQLException {
        boolean rowDeleted;
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(DELETE_STUDENTS_SQL);) {
            statement.setInt(1, id);
            rowDeleted = statement.executeUpdate() > 0;
        }
        return rowDeleted;
    }

    public boolean updateStudent(Student student) throws SQLException {
        boolean rowUpdated;
        try (Connection connection = getConnection();
             PreparedStatement statement = connection.prepareStatement(UPDATE_STUDENTS_SQL);) {
            statement.setString(1, student.getStud_name());
            statement.setInt(2, student.getMarks());
            statement.setString(3, student.getSkill());
            statement.setInt(4, student.getStud_id());
            rowUpdated = statement.executeUpdate() > 0;
        }
        return rowUpdated;
    }

    private void printSQLException(SQLException ex) {
        for (Throwable e : ex) {
            if (e instanceof SQLException) {
                e.printStackTrace(System.err);
                System.err.println("SQLState: " + ((SQLException) e).getSQLState());
                System.err.println("Error Code: " + ((SQLException) e).getErrorCode());
                System.err.println("Message: " + e.getMessage());
                Throwable t = ex.getCause();
                while (t != null) {
                    System.out.println("Cause: " + t);
                    t = t.getCause();
                }
            }
        }
    }
}

