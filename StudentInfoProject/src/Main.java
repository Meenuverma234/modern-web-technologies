/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author charan
 */
public class Main {
    public static void main(String[] args) {
        Student s = new Student();
        s.setName("Alice");
        s.setAge(20);
        s.setProgram("Computer Science");
        s.printStudentInfo();
        s.attendClass();

        System.out.println();

        InternationalStudent is = new InternationalStudent();
        is.setName("Carlos");
        is.setAge(22);
        is.setProgram("Business");
        is.setCountryOfOrigin("Brazil");
        is.printStudentInfo();
        is.attendClass();
    }
}
