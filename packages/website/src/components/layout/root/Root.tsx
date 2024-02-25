import { Content } from "../content"
import { Footer } from "../footer"
import { Header } from "../header"

export const Root: FCC = ({ children }) => {
  return <>
    <Header />
    <Content>{ children }</Content>
    <Footer />
  </>
}