import EmailActionIcons from './content_sections/EmailActionIcons'
import EmailInfo from './content_sections/EmailInfo'


function ContentHeader () { 
    return ( 
        <header className="email-content--header">
        <div className="avatar"></div>
       <EmailInfo/>
        <div className="date-info">
          <p>17 March 2021, 09:33</p>
        </div>
        <EmailActionIcons />
      </header>
    )
}

export default ContentHeader;