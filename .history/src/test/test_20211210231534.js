import React from 'react'

export default function asd() {
    return (
        <div className="ediwow">
              <form>
              <label for="fname">First name:</label><br>
              <input type="text" id="fname" name="fname" pattern="[A-Za-z]" required value="fname"/>
              <label for="lname">Last name:</label><br>
              <input type="text" id="lname" name="lname" pattern="[A-Za-z]" required value="lname"/>
              <input type="submit" value="Submit"/>
              </form>
        </div>
    )
}