import ToolbarNav from './email_toolbar_nav/ToolbarNav';
import ContentHeader from './email_content/ContentHeader';

import flaticonWelcomeImage from './assets/images/flaticon-welcome-image.png'


function Main () { 
    return (
        <main className="email-view">
          < ToolbarNav />
        <article className="email-content">
          <div className="title">
            <h1>Welcome to Flaticon</h1>
          </div>
        <ContentHeader />
          <section className="email-body">
            <div className="content">
              <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
            </div>
          </section>
          <section className="email-actions">
            <button>Reply</button>
            <button>Forward</button>
          </section>
        </article>
        </main>
    )
}


export default Main; 