" This is a test comment
execute pathogen#infect()
filetype plugin indent on
syntax on

" Tap options - 4 spaces
set shiftwidth=4
set tabstop=4

" Indenting
set cindent

" Show matching brackets
set showmatch

" Show line numbers
set number

" Do not wrap lines
set nowrap

" Split
set splitright

" Latex settings
autocmd FileType tex setlocal wrap spell

" Colorscheme
colorscheme desert

" keybinds
nnoremap <Tab> :bnext<CR>:redraw<CR>:ls<CR>
nnoremap <s-Tab> :bprev<CR>:redraw<CR>:ls<CR>
map <F12> :Goyo<CR>

" Controls for moving between tabs, alt + arrow
nmap <silent> <A-Up> :wincmd k<CR>
nmap <silent> <A-Down> :wincmd j<CR>
nmap <silent> <A-Left> :wincmd h<CR>
nmap <silent> <A-Right> :wincmd l<CR>

" Control opening of NERDtree
nmap <C-k><C-b> :NERDTreeToggle<CR>

" C snippets
autocmd FileType c inoremap ,f for(int i = 0; i < ; i++)<CR>{<CR><===><CR>}<ESC>3kf<la
autocmd FileType c inoremap ,i if()<CR>{<CR><===><CR>}<ESC>3kf(a
autocmd FileType c inoremap ,w while()<CR>{<CR><===><CR>}<ESC>3kf(a


" Statusbar

set laststatus=2
set statusline+=%#LineNr#
set statusline+=\ %f

"function! GitBranch()
"  return system("git rev-parse --abbrev-ref HEAD 2>/dev/null | tr -d '\n'")
"endfunction
"
"function! StatuslineGit()
"  let l:branchname = GitBranch()
"  return strlen(l:branchname) > 0?'  '.l:branchname.' ':''
"endfunction

"set statusline=
"set statusline+=%#PmenuSel#
"set statusline+=%{StatuslineGit()}
"set statusline+=%#LineNr#
"set statusline+=\ %f
"set statusline+=%m\
"set statusline+=%=
"set statusline+=%#CursorColumn#
"set statusline+=\ %y
"set statusline+=\ %{&fileencoding?&fileencoding:&encoding}
"set statusline+=\[%{&fileformat}\]
"set statusline+=\ %p%%
"set statusline+=\ %l:%c
"set statusline+=\

" Syntastic
" Temp options
