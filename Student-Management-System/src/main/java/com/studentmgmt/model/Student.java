package com.studentmgmt.model;

public class Student {

	private Integer stud_id;
	private String stud_name;
	private Integer marks;
	private String skill;
	
	public Student(Integer stud_id, String stud_name, Integer marks, String skill) {
		super();
		this.stud_id = stud_id;
		this.stud_name = stud_name;
		this.marks = marks;
		this.skill = skill;
	}
	
	public Student(String stud_name, Integer marks, String skill) {
		super();
		this.stud_name = stud_name;
		this.marks = marks;
		this.skill = skill;
	}
	
	public void setStud_id(Integer stud_id) {
		this.stud_id = stud_id;
	}
	
	public Integer getStud_id() {
		return stud_id;
	}
	public String getStud_name() {
		return stud_name;
	}
	public void setStud_name(String stud_name) {
		this.stud_name = stud_name;
	}
	public Integer getMarks() {
		return marks;
	}
	public void setMarks(Integer marks) {
		this.marks = marks;
	}
	public String getSkill() {
		return skill;
	}
	public void setSkill(String skill) {
		this.skill = skill;
	}
	
		
}
