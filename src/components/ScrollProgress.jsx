import useScrollProgress from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  useScrollProgress(null)
  return <div id="scroll-progress" />
}
