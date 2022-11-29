import localFont from '@next/font/local'

const myLocalFont = localFont({
    src: './myfont/font.otf'
})

export default () => {
    return (<>
        <h1 className={myLocalFont.className}>White christmas</h1>
    </>)
}