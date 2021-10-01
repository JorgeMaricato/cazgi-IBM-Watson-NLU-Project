import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    getEmotionTable = () => Object.entries(this.props.emotions).map(function(mapentry) {
        return (
            <tr>
            <td>{mapentry[0]}</td>
            <td>{mapentry[1]}</td>
            </tr>
        )
    });

    render() {
      //Returns the emotions as an HTML table
      let emotionTable = this.getEmotionTable();
      return (  
        <div>
          <table className="table table-bordered">
            <tbody>
            {
              /*Write code to use the .map method that you worked on in the 
              Hands-on React lab to extract the emotions. If you are stuck,
              please click the instructions to see how to implement a map*/
              emotionTable
            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;