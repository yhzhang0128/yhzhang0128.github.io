import{_ as e,c as t,o,a2 as r}from"./chunks/framework.CeQAp18V.js";const _=JSON.parse('{"title":"The Learning Outcomes","description":"","frontmatter":{},"headers":[],"relativePath":"book/outcome.md","filePath":"book/outcome.md"}'),d={name:"book/outcome.md"},s=r('<h1 id="the-learning-outcomes" tabindex="-1">The Learning Outcomes <a class="header-anchor" href="#the-learning-outcomes" aria-label="Permalink to &quot;The Learning Outcomes&quot;">​</a></h1><p>As we have stated <a href="./overview.html">at the start</a>, the goal of this little book is to help students gain experience and confidence in <strong>creating</strong> their own operating system or similar computer systems in their future career. As illustrated in the table below, every project helps students understand how to create one piece of <a href="https://github.com/yhzhang0128/egos-2000" target="_blank" rel="noreferrer">egos-2000</a>. Except for 6 user applications, students have studied <strong>all the code</strong> of egos-2000 thoroughly.</p><table tabindex="0"><thead><tr><th></th><th>Pieces of egos-2000</th></tr></thead><tbody><tr><td>P0: Hello, World!</td><td><code>library/libc</code></td></tr><tr><td>P1: Cooperative Threads</td><td><code>grass/process.h</code>, <code>grass/process.c</code></td></tr><tr><td>P2: Preemptive Scheduler</td><td><code>earth/cpu_intr.c</code>, <code>grass/kernel.s</code>, part of <code>grass/kernel.c</code></td></tr><tr><td>P3: System Call &amp; Protection</td><td><code>grass/kernel.c</code>, <code>library/syscall</code>, <code>apps/system/sys_proc.c</code></td></tr><tr><td>P4: Virtual Memory</td><td><code>earth/cpu_mmu.c</code>, <code>library/elf</code></td></tr><tr><td>P5: Serial Device Driver</td><td><code>earth/dev_{disk,tty}.c </code>, <code>apps/system/sys_terminal.c</code></td></tr><tr><td>P6: File System</td><td><code>library/file</code>, <code>tools/mkfs.c</code>, <code>apps/system/sys_file.c</code></td></tr><tr><td>P7: Ethernet &amp; TCP/IP</td><td><code>apps/user/udp_hello.c </code></td></tr><tr><td>P8: Multicore &amp; Locks</td><td><code>earth/boot.s</code>, <code>earth/boot.c</code>, <code>apps/system/sys_shell.c</code></td></tr></tbody></table>',3),c=[s];function a(i,n,l,h,p,m){return o(),t("div",null,c)}const g=e(d,[["render",a]]);export{_ as __pageData,g as default};