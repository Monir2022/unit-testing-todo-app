import React from 'react';

import { mockLocalStorage } from './mockLocalStorage';
import App from '../App';

const { getItemMock, setItemMock } = mockLocalStorage();

test('Getting something from localStorage', () => {

//Arrange    
    render(
        <RecoilRoot>
          <App />
        </RecoilRoot>)  
 
 //Acts
 getItemMock.mockReturnValue('chair');

 //Assert
    expect(getItemMock).toHaveBeenCalled();
    expect(getByText(/chair/i)).toBeInTheDocument()
});


it('Set something to be in localStorage', () => {

//Arrange  
render(
    <RecoilRoot>
      <App />
    </RecoilRoot>)

//Acts
    const value = "value"
    const key = "key"
 //Assert   
    expect(setItemMock).toHaveBeenCalledWith(key, value);
} );