import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    quantity: '',
    unit: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://onprem.digital.acsiatech.com/csmsadmin/v1/charge/rate',
        JSON.stringify(formData),
        {
          headers: {
            'Content-Type': 'application/json',
            'Accountid': 100408,
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwYWNYR0t1X1JkcHpoN0pRaGFOY3AzNmNQYktYbTI5X2FBZV9WSkhrczdrIn0.eyJleHAiOjE3MjEyOTk4MDMsImlhdCI6MTcyMTI5NjIwMywianRpIjoiYTY5YWQ0YjQtNzA0My00OTlhLWJjY2QtZTViZTU3ZmFlZjBjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmRldmVsb3Auc3ZjLmNsdXN0ZXIubG9jYWwvcmVhbG1zL1NDSE9OIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6IjMyOWJhNjE5LTczMzMtNGRhOC04YmIwLTQ5Yjg2YjhiZWQ4NyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluX3dlYl9jaGFyZ2luZ19saXRlIiwic2Vzc2lvbl9zdGF0ZSI6ImFkZDdkYWM1LWE1NzYtNDhmMS04ZjQ3LTI0OGJjYjU2NjhmYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ09ORklHX0FDQ0VTUyIsIk5PVElGSUNBVElPTiIsIk9QRVJBVE9SIiwiU1lTVEVNX1BVU0hfTk9USUZZIiwiU1lTVEVNX1VTQUdFX0FVRElUIiwiZGVmYXVsdC1yb2xlcy1TQ0hPTiIsIlNZU1RFTV9QQVlNRU5UIiwiR1VFU1QiLCJTWVNURU1fRU1BSUxfTk9USUZZIiwiU1lTVEVNX0FVRElUIiwiU1lTVEVNX1NNU19OT1RJRlkiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImFkZDdkYWM1LWE1NzYtNDhmMS04ZjQ3LTI0OGJjYjU2NjhmYiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkVsc2EgU3RhbmV5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZWxzYS5zdGFuZXlAYWNzaWF0ZWNoLmNvbSIsImdpdmVuX25hbWUiOiJFbHNhIiwiZmFtaWx5X25hbWUiOiJTdGFuZXkiLCJlbWFpbCI6ImVsc2Euc3RhbmV5QGFjc2lhdGVjaC5jb20ifQ.a6DIExyfPIocq7skevNVXt50w9wkfaE3O-wqoDrMicN3YQ0BeFf5QJ_EQuPAuV7XArSUrQcCrlmaC5rmwFFiMfWCCrmGqoOIgePZjhT5bCGEaqzg61ag-o29g4KmYeRMY3kazvHK-lnUzC853aQkOZZT4_u8iBRBREInVvGikZoj3f9-XCYs8tT01QPz7PzILnD5_rI_24geyap_PGD61eyDFzCC4Ppp5A2e6sJXE4bYJExr2g3X3D5rntLH7iaHj9vgoTrVF8ljh6FT9xmmTBHxJS9iZZU4F0jDNuK9kXusCcihLnrcsmLq9QMLN3gbbuP73SfgtAQuB4qrb1akHQ'
          }
        }
      );
      console.log('Form data successfully submitted:', response.data);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleDisplay = async () => {
    try {
      const response = await axios.get('https://onprem.digital.acsiatech.com/csmsadmin/v1/charge/rate', {
        params: { category: formData.category },
        headers: {
          'Accountid' : 100408,
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIwYWNYR0t1X1JkcHpoN0pRaGFOY3AzNmNQYktYbTI5X2FBZV9WSkhrczdrIn0.eyJleHAiOjE3MjEyOTk4MDMsImlhdCI6MTcyMTI5NjIwMywianRpIjoiYTY5YWQ0YjQtNzA0My00OTlhLWJjY2QtZTViZTU3ZmFlZjBjIiwiaXNzIjoiaHR0cDovL2tleWNsb2FrLmRldmVsb3Auc3ZjLmNsdXN0ZXIubG9jYWwvcmVhbG1zL1NDSE9OIiwiYXVkIjpbInJlYWxtLW1hbmFnZW1lbnQiLCJhY2NvdW50Il0sInN1YiI6IjMyOWJhNjE5LTczMzMtNGRhOC04YmIwLTQ5Yjg2YjhiZWQ4NyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImFkbWluX3dlYl9jaGFyZ2luZ19saXRlIiwic2Vzc2lvbl9zdGF0ZSI6ImFkZDdkYWM1LWE1NzYtNDhmMS04ZjQ3LTI0OGJjYjU2NjhmYiIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiQ09ORklHX0FDQ0VTUyIsIk5PVElGSUNBVElPTiIsIk9QRVJBVE9SIiwiU1lTVEVNX1BVU0hfTk9USUZZIiwiU1lTVEVNX1VTQUdFX0FVRElUIiwiZGVmYXVsdC1yb2xlcy1TQ0hPTiIsIlNZU1RFTV9QQVlNRU5UIiwiR1VFU1QiLCJTWVNURU1fRU1BSUxfTk9USUZZIiwiU1lTVEVNX0FVRElUIiwiU1lTVEVNX1NNU19OT1RJRlkiXX0sInJlc291cmNlX2FjY2VzcyI6eyJyZWFsbS1tYW5hZ2VtZW50Ijp7InJvbGVzIjpbInZpZXctaWRlbnRpdHktcHJvdmlkZXJzIiwidmlldy1yZWFsbSIsIm1hbmFnZS1pZGVudGl0eS1wcm92aWRlcnMiLCJpbXBlcnNvbmF0aW9uIiwicmVhbG0tYWRtaW4iLCJjcmVhdGUtY2xpZW50IiwibWFuYWdlLXVzZXJzIiwicXVlcnktcmVhbG1zIiwidmlldy1hdXRob3JpemF0aW9uIiwicXVlcnktY2xpZW50cyIsInF1ZXJ5LXVzZXJzIiwibWFuYWdlLWV2ZW50cyIsIm1hbmFnZS1yZWFsbSIsInZpZXctZXZlbnRzIiwidmlldy11c2VycyIsInZpZXctY2xpZW50cyIsIm1hbmFnZS1hdXRob3JpemF0aW9uIiwibWFuYWdlLWNsaWVudHMiLCJxdWVyeS1ncm91cHMiXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6ImFkZDdkYWM1LWE1NzYtNDhmMS04ZjQ3LTI0OGJjYjU2NjhmYiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwibmFtZSI6IkVsc2EgU3RhbmV5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiZWxzYS5zdGFuZXlAYWNzaWF0ZWNoLmNvbSIsImdpdmVuX25hbWUiOiJFbHNhIiwiZmFtaWx5X25hbWUiOiJTdGFuZXkiLCJlbWFpbCI6ImVsc2Euc3RhbmV5QGFjc2lhdGVjaC5jb20ifQ.a6DIExyfPIocq7skevNVXt50w9wkfaE3O-wqoDrMicN3YQ0BeFf5QJ_EQuPAuV7XArSUrQcCrlmaC5rmwFFiMfWCCrmGqoOIgePZjhT5bCGEaqzg61ag-o29g4KmYeRMY3kazvHK-lnUzC853aQkOZZT4_u8iBRBREInVvGikZoj3f9-XCYs8tT01QPz7PzILnD5_rI_24geyap_PGD61eyDFzCC4Ppp5A2e6sJXE4bYJExr2g3X3D5rntLH7iaHj9vgoTrVF8ljh6FT9xmmTBHxJS9iZZU4F0jDNuK9kXusCcihLnrcsmLq9QMLN3gbbuP73SfgtAQuB4qrb1akHQ'
        }
      });
      console.log('Data retrieved successfully:', response.data);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="formContainer">
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Unit:
          <input
            type="number"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="selectBox"
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </label>
        <br />
        <div className="buttonContainer">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleDisplay}>Display</button>
        </div>
      </form>
    </div>
  );
}

export default App;