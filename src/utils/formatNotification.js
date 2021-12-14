import EN2KR from './EN2KR';

export function fTitle(level) {
  if (level === 1) return `알림`;
  if (level === 2) return `경고`;
  return `문제`;
}

export function fDescription(subject, level) {
  if (level === 1) return `${EN2KR[subject]}에 알림 발생!`;
  if (level === 2) return `${EN2KR[subject]}에 경고 발생!`;
  return `${EN2KR[subject]}에 문제 발생!`;
}
