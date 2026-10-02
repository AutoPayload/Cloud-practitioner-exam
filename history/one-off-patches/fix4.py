p='template.html'; s=open(p).read()
def r(a,b):
    global s
    assert s.count(a)==1,a[:60]; s=s.replace(a,b)
r('--flag: #a8660c;','--flag: #8a5208;')
r('.chip[aria-pressed="false"] { opacity: .62; }','.chip[aria-pressed="false"] { color: var(--muted); }')
r('.kbd { font-family','@media (max-width: 520px) { .actions .right { width: 100%; } .actions .right #next { flex: 1; } }\n.kbd { font-family')
r('<section class="panel" aria-labelledby="topics-title">','<section class="panel" id="topics-panel" aria-labelledby="topics-title">')
r('''    $("topics").hidden = store.mode === "missed";
    $("sel-all").parentElement.hidden = store.mode === "missed";
    $("topic-note").hidden = store.mode === "missed";''','''    $("topics-panel").hidden = store.mode === "missed";''')
r('$("lengths").hidden = store.mode === "exam";','$("lengths").hidden = store.mode !== "practice";')
r('len: saved.len || "20"','len: ["10", "20", "40", "all"].includes(saved.len) ? saved.len : "20"')
r('''    if ($("quiz").hidden || !S || S.done || e.metaKey || e.ctrlKey || e.altKey) return;''','''    if ($("quiz").hidden || !S || S.done || e.metaKey || e.ctrlKey || e.altKey) return;
    if (!$("quit-confirm").hidden || !$("finish-confirm").hidden) {
      if (e.key === "Escape") { $("quit-confirm").hidden = true; $("finish-confirm").hidden = true; }
      return;
    }''')
# stratified exam draw
r('''    const deck = shuffle(pool).slice(0, n).map(q => ({ q, order: shuffle([0, 1, 2, 3]) }));''','''    let picked;
    if (mode === "exam") {
      // Weight the draw like the real exam (Domain 4, billing, is out of scope here, so its share is spread across the other three).
      const W = { 1: 0.28, 2: 0.33, 3: 0.39 };
      const byD = { 1: [], 2: [], 3: [] };
      shuffle(pool).forEach(q => byD[TOPICS[q.t].d].push(q));
      picked = [];
      for (const d of [1, 2, 3]) picked.push(...byD[d].splice(0, Math.round(n * W[d])));
      const rest = shuffle([].concat(byD[1], byD[2], byD[3]));
      while (picked.length < n && rest.length) picked.push(rest.pop());
      picked = shuffle(picked.slice(0, n));
    } else picked = shuffle(pool).slice(0, n);
    const deck = picked.map(q => ({ q, order: shuffle([0, 1, 2, 3]) }));''')
r('''  renderHome();
  show("home");
})();''','''  window.addEventListener("beforeunload", e => { if (S && !S.done && S.mode === "exam") { e.preventDefault(); e.returnValue = ""; } });

  renderHome();
  show("home");
})();''')
open(p,'w').write(s); print('ok')
