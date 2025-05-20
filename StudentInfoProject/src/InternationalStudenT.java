/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author charan
 */
public class InternationalStudent extends Student {
    private String countryOfOrigin;

    public String getCountryOfOrigin() { return countryOfOrigin; }
    public void setCountryOfOrigin(String countryOfOrigin) { this.countryOfOrigin = countryOfOrigin; }

    @Override
    public void attendClass() {
        System.out.println(getName() + " from " + countryOfOrigin + " is attending class.");
    }
}
