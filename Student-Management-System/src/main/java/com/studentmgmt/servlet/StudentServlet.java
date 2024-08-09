package com.studentmgmt.servlet;

import com.studentmgmt.dao.StudentDAO;
import com.studentmgmt.model.Student;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;


@WebServlet("/test")
public class StudentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private StudentDAO studentDAO;
    private static final Logger LOGGER = Logger.getLogger(StudentServlet.class.getName());

    public void init() {
        studentDAO = new StudentDAO();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws jakarta.servlet.ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String action = request.getServletPath();
        LOGGER.info("Handling request for path: " + action);        
        try {
            switch (action) {
             case "/new":
                    showNewForm(request, response);
                    break;
                case "/insert":
                    insertStudent(request, response);
                    break;
                case "/delete":
                    deleteStudent(request, response);
                    break;
                case "/edit":
                    showEditForm(request, response);
                    break;
                case "/update":
                    updateStudent(request, response);
                    break;
                default:
                    listStudent(request, response);
                    break;
            }
        } catch (SQLException ex) {
        	LOGGER.severe("SQL Error: " + ex.getMessage());
            throw new ServletException(ex);
        }
//    }
    }

    private void listStudent(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException, ServletException {
    	 LOGGER.info("Entering listStudent method");
        List<Student> listStudent = studentDAO.selectAllStudents();
        request.setAttribute("listStudent", listStudent);
        RequestDispatcher dispatcher = request.getRequestDispatcher("listStudents.jsp");
        dispatcher.forward(request, response);
        LOGGER.info("Exiting listStudent method");
    }
    
    private void showNewForm(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        RequestDispatcher dispatcher = request.getRequestDispatcher("addStudent.jsp");
        dispatcher.forward(request, response);
    }

    private void showEditForm(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, ServletException, IOException {
    	//retrieves the value of the "id" parameter from the HTTP request as String.
        int id = Integer.parseInt(request.getParameter("id"));
        Student existingStudent = studentDAO.selectStudent(id);
        RequestDispatcher dispatcher = request.getRequestDispatcher("updateStudent.jsp");
        request.setAttribute("student", existingStudent);
        dispatcher.forward(request, response);
    }

    private void insertStudent(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        String stud_name = request.getParameter("studname");
        Integer marks = Integer.parseInt(request.getParameter("marks"));
        String skill = request.getParameter("skill");
        Student newStudent = new Student(stud_name,marks,skill);
        studentDAO.insertStudent(newStudent);
        response.sendRedirect(request.getContextPath()+"/");
    }

    private void updateStudent(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        int id = Integer.parseInt(request.getParameter("id"));
        String stud_name = request.getParameter("studname");
        Integer marks = Integer.parseInt(request.getParameter("marks"));
        String skill = request.getParameter("skill");

        Student updated = new Student(id,stud_name,marks,skill);
        studentDAO.updateStudent(updated);
        System.out.println(request.getContextPath()+"/");
        response.sendRedirect(request.getContextPath()+"/");
    }

    private void deleteStudent(HttpServletRequest request, HttpServletResponse response)
            throws SQLException, IOException {
        Integer id = Integer.parseInt(request.getParameter("id"));
        boolean success = studentDAO.deleteStudent(id);
        if (success) {
            System.out.println("Student deleted successfully.");
        } else {
            System.out.println("Failed to delete student.");
        }
        response.sendRedirect(request.getContextPath()+"/");
    }
}
