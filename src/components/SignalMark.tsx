export function SignalMark({ small = false }: { small?: boolean }) {
  return <div className={`signal-mark ${small ? 'small' : ''}`} aria-label="Techfest IIT Bombay"><span>TF</span><i/><i/><i/></div>
}
