/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author charan
 */
public class Student extends Person {
    private String program;

    public String getProgram() { return program; }
    public void setProgram(String program) { this.program = program; }

    public void printStudentInfo() {
        System.out.println("Name: " + getName());
        System.out.println("Age: " + getAge());
        System.out.println("Program: " + program);
    }
}
