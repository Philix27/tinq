import MarkdownIt from 'markdown-it'




export default function BlogsPage({anArticle}) {

  const md = new MarkdownIt();
  const cc = md.render('docs/test.md');

    return (
        <section
          className='section'
        >
           <div className='markdown-section'>
              {/* <div className='sectionTitle'>{anArticle.title}</div> */}
        <div
            dangerouslySetInnerHTML={{ __html: cc }}
            // dangerouslySetInnerHTML={{ __html: md.render(anArticle.content) }}
          >
          </div>
           </div>
          </section>
           
    );
}
