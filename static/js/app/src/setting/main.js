/*! power by kodcloud ver4.36(2018-09-28) [build 1538142384838] */
define("app/src/setting/main", ["lib/jquery-lib", "lib/artDialog/jquery-artDialog", "lib/util", "lib/contextMenu/jquery-contextMenu", "../../common/core", "../../common/tpl/upload.html", "../../common/tpl/formMake.html", "../../common/core.tools", "../../common/core.upload", "../../common/core.api", "../../common/core.playSound", "../../common/core.formMake", "../../common/rightMenuExtence", "../../app/appBase", "../../app/editor", "../../app/openWith", "../../app/html", "../../common/tpl/copyright.html", "../../common/tpl/themeDIY.html", "./fav", "./setting", "./page/about.html", "./page/fav.html", "./page/help.html", "./page/member.html", "./page/system.html", "./page/theme.html", "./page/user.html", "./page/wall.html", "./system/systemSetting", "./system/system", "lib/ztree/ztree", "./system/systemMember", "./system/tpl/userList.html", "./system/tpl/user.html", "./system/tpl/userImport.html", "./system/tpl/groupSelect.html", "./system/systemGroup", "./system/tpl/group.html", "./system/systemRole", "./system/systemGroupRole", "./system/tpl/groupRoleSetting.html"], function(a, b, c) {
    a("lib/jquery-lib"),
    a("lib/artDialog/jquery-artDialog"),
    a("lib/util"),
    a("lib/contextMenu/jquery-contextMenu"),
    core = a("../../common/core"),
    core.init(),
    Fav = a("./fav"),
    Setting = a("./setting"),
    a("./system/systemSetting"),
    System = a("./system/system"),
    $(document).ready(function() {
        $(".init-loading").fadeOut(450).addClass("pop_fadeout"),
        core.init(),
        Setting.init()
    })
});
;;;;;!function($) {
    !function($, n, i, t, r, o, e, c, f, a, u, d, v, s, E, h, C, l, p, A, O, G, g, b, S, m, I, J, y, B, K, k, L, F, X, M, _, N, Q, R, H, w, P, T, D, x, V, z, Y, W, U, q, j, Z, $n, nn, tn, rn, on, en, cn, fn, an, un, dn, vn, sn, En, hn, Cn, ln, pn, An, On, Gn, gn, bn, Sn, mn, In, Jn, yn, Bn, Kn, kn, Ln, Fn, Xn, Mn, _n, Nn, Qn, Rn, Hn, wn, Pn, Tn, Dn, xn, Vn, zn, Yn, Wn, Un, qn, jn, Zn, $i, ni, ii, ti, ri, oi, ei, ci, fi, ai, ui, di, vi, si, Ei, hi, Ci, li, pi, Ai, Oi, Gi, gi, bi, Si, mi, Ii, Ji, yi, Bi, Ki, ki, Li, Fi, Xi, Mi, _i, Ni, Qi, Ri, Hi, wi, Pi, Ti, Di, xi, Vi, zi, Yi, Wi, Ui, qi, ji, Zi, $t, nt, it, tt, rt, ot, et, ct, ft, at, ut, dt, vt, st, Et, ht, Ct, lt, pt, At, Ot, Gt, gt, bt, St, mt, It, Jt, yt, Bt, Kt, kt, Lt, Ft, Xt, Mt, _t, Nt, Qt, Rt, Ht, wt, Pt, Tt, Dt, xt, Vt, zt, Yt, Wt, Ut, qt, jt, Zt, $r, nr, ir, tr, rr, or, er, cr, fr, ar, ur, dr, vr, sr, Er, hr, Cr, lr, pr, Ar, Or, Gr, gr, br, Sr, mr, Ir, Jr, yr, Br, Kr, kr, Lr, Fr, Xr, Mr, _r, Nr, Qr, Rr, Hr, wr, Pr, Tr, Dr, xr, Vr, zr, Yr, Wr, Ur, qr, jr, Zr, $o, no, io, to, ro, oo, eo, co, fo, ao, uo, vo, so, Eo, ho, Co, lo, po, Ao, Oo, Go, go, bo, So, mo, Io, Jo, yo, Bo, Ko, ko, Lo, Fo, Xo, Mo, _o, No, Qo, Ro, Ho, wo, Po, To, Do, xo, Vo, zo, Yo, Wo, Uo, qo, jo, Zo, $e, ne, ie, te, re, oe, ee, ce, fe, ae, ue, de, ve, se, Ee, he, Ce, le, pe, Ae, Oe, Ge, ge, be, Se, me, Ie, Je, ye, Be, Ke, ke, Le, Fe, Xe, Me, _e, Ne, Qe, Re, He, we, Pe, Te, De, xe, Ve, ze, Ye, We, Ue, qe, je, Ze, $c, nc, ic, tc, rc, oc, ec, cc, fc, ac, uc, dc, vc, sc, Ec, hc, Cc, lc, pc, Ac, Oc, Gc, gc, bc, Sc, mc, Ic, Jc, yc, Bc, Kc, kc, Lc, Fc, Xc, Mc, _c, Nc, Qc, Rc, Hc, wc, Pc, Tc, Dc, xc, Vc, zc, Yc, Wc, Uc, qc, jc, Zc, $f, nf, tf, rf, of, ef, cf, ff, af, uf, df, vf, sf, Ef, hf, Cf, lf, pf, Af, Of, Gf, gf, bf, Sf, mf, If, Jf, yf, Bf, Kf, kf, Lf, Ff, Xf, Mf, _f, Nf, Qf, Rf, Hf, wf, Pf, Tf, Df, xf, Vf, zf, Yf, Wf, Uf, qf, jf, Zf, $a, na, ia, ta, ra, oa, ea, ca, fa, aa, ua, da, va, sa, Ea, ha) {
        $[i](t, [r, o, e, c, f, a, u, d, v, s, E, h, C, l], function(n) {
            $[p] = n(r),
            $[A] = n(o);
            var i = n(e)
              , t = n(c)
              , Ca = n(f)
              , la = n(a)
              , pa = n(u);
            n(d),
            $[O] = n(v),
            n(s),
            n(E),
            n(h),
            $[G] = function(n) {
                return $[g](n)
            }
            ,
            $[b] = function(n) {
                return $[S](n)
            }
            ;
            var Aa = function() {
                $[I][m] = n,
                $[y][J] || ($[y][J] = function(n, i) {
                    $[y][B][n] = i
                }
                ,
                $[y][K] = function(n, i) {
                    $[y][B][k][n] = i
                }
                ),
                $[y][J](L, !F),
                $[y][J](X, !M),
                $[y][K](_, {
                    $: $[N],
                    window: $[I],
                    log: $[R][Q],
                    core: $[H],
                    pathTools: $[I][w],
                    inArray: $[P]
                }),
                $[y][B][k][w] = $[I][w],
                $[y][B][L] = !F,
                T == $[x][D] ? ($[y][B][V] = !F,
                $[y][B][z] = !F,
                $[y][B][Y] = !M) : ($[y][B][V] = !M,
                $[y][B][z] = !M,
                $[y][B][Y] = !F)
            }
              , Oa = function() {
                Aa(),
                W != typeof $[x] && (F != $[x][U] && $[N](j)[q](),
                $[x][U] || $[H][Z]($n) || F == $[H][Z](nn) || $[N](tn)[q](),
                $[x][rn] && on == $[x][rn][en] && ($[N][fn][B][cn] = !F),
                Ga()),
                $[an]() && ($[N](dn)[un](vn),
                n[sn](En, function() {
                    $[N](function() {
                        $[Cn][hn]($[ln][dn])
                    })
                }),
                $[N](An)[pn](On, function() {
                    var n = $[N](this);
                    $[N](this)[Gn](gn) || (n = $[N](this)[bn](Sn)),
                    n[mn](In),
                    $[N][yn][Jn]()
                }),
                $[N](Bn)[pn](Kn, function() {
                    var n = $[N](this)[kn](Ln);
                    n[Fn](Xn, Mn),
                    $[_n](function() {
                        n[Fn](Xn, Nn)
                    }, Qn)
                })),
                $[N](Hn)[Rn](wn, function(n) {
                    if (M == $[N](n[Tn])[bn](Ln)[Pn])
                        try {
                            $[N][yn][Jn]()
                        } catch (n) {}
                }),
                $[N](dn)[wn](function() {
                    $[xn][Dn](Vn, function(n) {
                        $[zn] != n && n[N](dn)[mn](wn)
                    })
                }),
                $[N][fn][B][cn] && $[Yn]([Wn, Un, qn, Sn, jn, Zn, $i, ni], [ii, ti, ri, oi]),
                $[N](ci)[ei](fi, ai),
                $[N][ui]({
                    headers: {
                        "X-CSRF-TOKEN": $[vi][di](si)
                    }
                }),
                $[N](Ei)[wn](function() {
                    var n = $[N](this)[ei](hi);
                    $[vi][Ci](hi, n),
                    $[I][pi][li]()
                }),
                $[N](Ei)[Fn]({
                    padding: Ai
                }),
                $[N](Oi + $[vi][di](hi) + Gi)[Fn]({
                    background: gi,
                    color: bi
                }),
                $[H][Si](),
                $[H][Ii][mi]();
                for (var i = M; i < $[I][Ji][Pn]; i++)
                    try {
                        $[I][Ji][i]()
                    } catch (t) {
                        $[R][yi](Bi, t)
                    }
                $[Ki][mn](ki),
                ga()
            }
              , Ga = function() {
                var n = $[I][pi]
                  , i = n[Li] ? Fi + n[Li] : Vn;
                $[x][Xi] = n[Mi] + _i + n[Ni] + i + Qi,
                $[x][Ri] = $[Hi]($[x][Xi], Qi) + n[Pi][wi](Ti, Vn);
                var t = $[x][Di][wi](Ti, Vn);
                $[x][Xi] + $[xi](t, Qi) != $[x][Ri] && ($[x][Xi] = $[Hi]($[x][Ri], t) + Qi),
                $[x][Vi] = $[x][Ri] + zi,
                Yi == $[x][Ui][Wi] && ($[x][Vi] = $[x][Vi][wi](zi, qi)),
                $[vi][Ci](ji, $[x][Xi]),
                $[vi][Ci](Zi, $[x][Ri]),
                $[vi][Ci]($t, $[x][nt], it)
            }
              , ga = function() {
                $[an]() || n[sn]([tt, rt], function() {
                    var n = $[N](ot);
                    n[et]({
                        className: ct,
                        liveEvents: !M,
                        slide: !F,
                        alignTo: ft,
                        alignX: at,
                        alignY: ut,
                        showAniDuration: dt,
                        hideAniDuration: vt,
                        offsetY: st,
                        offsetX: Et,
                        showTimeout: function() {
                            var n = ht;
                            return $[N](this)[ei](Ct) && (n = $[lt]($[N](this)[ei](Ct))),
                            n
                        },
                        content: function() {
                            var n = $[N](this)[pt](At);
                            if ($[N](this)[ei](Ot)) {
                                var i = $[N]($[N](this)[ei](Ot));
                                n = i[Gt](gt) || i[Gt](bt) ? i[St]() : i[Hn]()
                            }
                            return n = n ? n : Vn,
                            n[wi](mt, It)
                        }
                    }),
                    $[N](dn)[Rn](Kn, function() {
                        $[N](Jt)[q](),
                        $[N][yt](Bt, Kt)
                    })[Rn](In, function() {
                        $[N][yt](Vn, Kt)
                    }),
                    $[N](kt)[pn](Lt, function() {
                        $[N](n)[et](Ft),
                        $[N](Jt)[q]()
                    })
                })
            };
            return {
                init: Oa,
                serverDwonload: t[Xt],
                upload: t[Mt],
                uploadInit: t[mi],
                playSound: la[_t],
                playSoundFile: la[Nt],
                tools: i,
                api: Ca,
                formMake: pa,
                getPathIcon: function(n, i) {
                    if (i = void M == i ? Vn : i,
                    Qt == $[N][Rt](n)) {
                        var t = $[Ht]($[Ht](n), Qi);
                        if (n = {},
                        wt != t[Pt](M, F) || t[Tt](Qi)[Pn] > F)
                            return {
                                icon: Vn,
                                name: Vn
                            };
                        n[Dt] = t[xt](Vt),
                        n[zt] = t[Tt](Fi)[F]
                    }
                    var r = {};
                    r[$[x][Yt]] = {
                        icon: Wt,
                        name: $[qt][Ut]
                    },
                    r[$[x][jt]] = {
                        icon: Zt
                    },
                    r[$[x][$r]] = {
                        icon: nr
                    },
                    r[$[x][ir]] = {
                        icon: Wt
                    },
                    r[$[x][tr]] = {
                        icon: rr,
                        name: $[qt][rr]
                    },
                    r[$[x][or]] = {
                        icon: er,
                        name: $[qt][cr]
                    },
                    r[$[x][fr]] = {
                        icon: ar,
                        name: $[qt][ur]
                    },
                    r[$[x][dr]] = {
                        icon: vr,
                        name: $[qt][sr]
                    };
                    var o = r[n[Dt]];
                    return n[Dt] == $[x][Yt] && $[x][Er] != n[zt] ? o = {
                        icon: hr,
                        name: i
                    } : n[Dt] == $[x][jt] && Cr == n[lr] && (o = {
                        icon: Zt
                    }),
                    void M == o && (o = {
                        icon: Vn,
                        name: Vn
                    }),
                    void M == o[pr] && (o[pr] = i),
                    o
                },
                isFileView: function() {
                    var n = $[x][Ar] + Or + $[x][Gr];
                    return gr == n || br == n ? !M : !F
                },
                isSystemPath: function(n) {
                    var n = $[Ht]($[Ht](n), Qi);
                    if (void M == n || wt != n[Pt](M, F) || n[Tt](Qi)[Pn] > F)
                        return !F;
                    var i = n[xt](Sr)
                      , t = [$[x][Yt], $[x][$r], $[x][tr], $[x][or], $[x][fr], $[x][dr]];
                    return -F !== $[N][P](i[M], t) ? !M : !F
                },
                pathPre: function(n) {
                    if (n = $[Ht]($[Ht](n), Qi),
                    void M == n || wt != n[Pt](M, F))
                        return Vn;
                    var i = n[xt](mr);
                    return i[M]
                },
                contextmenu: function(n) {
                    try {
                        $[N][yn][Jn]()
                    } catch (i) {}
                    var i = n || $[I][Ir];
                    return i ? i && $[N](i[Tn])[Gt](bt) || $[N](i[Tn])[Gt](gt) || $[N](i[Tn])[Gt](Jr) || $[N](i[Tn])[Gt](yr) || M != $[N](i[Tn])[bn](Br)[Pn] || M != $[N](i[Tn])[bn](Kr)[Pn] || M != $[N](i[Tn])[bn](kr)[Pn] || M != $[N](i[Tn])[bn](Lr)[Pn] ? !M : !F : !M
                },
                pathThis: function(n) {
                    if (!n || Qi == n)
                        return Vn;
                    var i = $[Hi](this[Fr](n), Qi)
                      , t = i[Xr](Qi)
                      , r = i[Mr](t + F);
                    if (M == r[_r](Nr)) {
                        r = $[Qr](r[Mr](r[_r](Rr)));
                        var o = r[Tt](Qi);
                        r = o[o[Pn] - F],
                        Vn == r && (r = o[o[Pn] - Hr])
                    }
                    return r
                },
                pathClear: function($) {
                    if (!$)
                        return Vn;
                    var n = $[wi](wr, Qi);
                    return n = n[wi](Pr, Qi),
                    n = n[wi](Tr, Qi)
                },
                pathFather: function(n) {
                    var i = $[Hi](this[Fr](n), Qi)
                      , t = i[Xr](Qi);
                    return i[Mr](M, t + F)
                },
                pathExt: function(n) {
                    var i = $[Ht](n, Qi);
                    return -F != i[Xr](Qi) && (i = i[Mr](i[Xr](Qi) + F)),
                    -F != i[Xr](Or) ? i[Mr](i[Xr](Or) + F)[Dr]() : i[Dr]()
                },
                pathUrlEncode: function(n) {
                    if (!n)
                        return Vn;
                    var i = $[xr](n);
                    return i = i[wi](Vr, Qi)
                },
                path2url: function(n, i) {
                    if (zr == n[Mr](M, Yr))
                        return n;
                    void M == i && (i = !M);
                    var t, r = this[Fr](n);
                    return $[x][U] && i && r[Pt](M, $[x][Wr][Pn]) == $[x][Wr] ? t = r[Pt](M, $[x][Ur][Pn]) == $[x][Ur] ? $[x][Ri] + this[qr](r[wi]($[x][Ur], Vn)) : $[x][Xi] + this[qr](r[wi]($[x][Wr], Vn)) : (t = $[x][Vi] + jr + $[x][Zr] + Rr + $[xr](r),
                    W != typeof $[x][$o] && (t = $[x][Vi] + no + $[x][hr] + io + $[x][to] + Rr + $[xr](r))),
                    t
                },
                pathCommon: function(n) {
                    if (zr == n[Mr](M, Yr))
                        return $[xr](n);
                    if (n[Mr](M, $[x][Yt][Pn]) == $[x][Yt])
                        return $[xr](n);
                    var i = this[Fr](n)
                      , t = $[xr](i);
                    return W != typeof $[x][$o] && (t = $[xr]($[x][Yt] + Fi + $[x][hr] + Qi + $[x][ro][pr] + i)),
                    t
                },
                isApp: function(n) {
                    if (W == typeof $[oo])
                        return !F;
                    var i = $[oo][eo];
                    return Qt == typeof n ? i == n : $[N][co](n) && -F !== $[N][P](i, n) ? !M : !F
                },
                pathReadable: function(n) {
                    if (fo != typeof $[x][ao])
                        return !M;
                    for (var i = $[x][ao][uo], t = M; t < i[Pn]; t++)
                        if (i[t][vo] == n)
                            return void M == i[t][so] || F == i[t][so] ? !M : !F;
                    i = $[x][ao][Eo];
                    for (var t = M; t < i[Pn]; t++)
                        if (i[t][vo] == n)
                            return void M == i[t][so] || F == i[t][so] ? !M : !F;
                    return !M
                },
                pathCurrentWriteable: function() {
                    return $[H][ho](Co) ? !F : $[x][ao][lo] ? $[x][ao][lo][po] : !F
                },
                authCheck: function(n, i) {
                    return $[x][U] ? !M : $[Oo][Ao](n) && F == $[Oo][n] ? !M : (i && (i = i === !M ? $[qt][Go] : i,
                    $[bo][go](i, !F)),
                    !F)
                },
                authCheckGroup: function(n, i) {
                    if (i = i || $[x][So],
                    F == $[x][U] || !$[x][mo])
                        return !M;
                    var t = i[xt]($[Io](Qi + $[x][jt] + Jo));
                    if (t && Hr == t[Pn] && $[x][mo][t[F]]) {
                        var r = $[x][mo][t[F]];
                        if (!r[Ao](n) || F != r[n])
                            return !F
                    }
                    return !M
                },
                ajaxError: function(n) {
                    var i = n[yo]
                      , t = $[N][fn][Ko][Bo];
                    return $[bo][ko]($[qt][Lo], !F),
                    Fo == i[Mr](M, Xo) ? void $[_n](function() {
                        var n = $[xn][Dn]();
                        n[pi][li]()
                    }, Mo) : (M == n[_o] && Vn == i && (i = No),
                    i = Qo + i + Ro,
                    t || $[N][fn]({
                        id: Bo,
                        padding: M,
                        width: Ho,
                        height: wo,
                        fixed: !M,
                        resize: !M,
                        ico: $[H][Po](yi),
                        title: To,
                        content: Vn
                    }),
                    void $[N][Do]($[N](xo), i))
                },
                fileGet: function(n, i, t) {
                    var r = Vo;
                    zr == n[Mr](M, Yr) && (r = zo);
                    var o = $[x][Vi] + Yo + r + Wo + $[xr](n);
                    W != typeof $[x][$o] && (o = $[x][Vi] + Uo + $[x][hr] + io + $[x][to] + qo + r + Wo + $[xr](n)),
                    (n[jo](Yo) >= M || n[jo](Zo) >= M) && (o = n),
                    $[N][$e]({
                        url: o,
                        dataType: ne,
                        error: function(n, i, r) {
                            $[H][ie](n, i, r),
                            te == typeof t && t()
                        },
                        success: function(n) {
                            n[re] && te == typeof i && (F == n[pt][oe] && (n[pt][ee] = $[ce](n[pt][ee])),
                            i(n[pt][ee], n, o)),
                            n[re] || te == typeof t && t(n[pt])
                        }
                    })
                },
                fileInfo: function(n, i) {
                    var t = $[x][Vi] + fe;
                    W != typeof $[x][$o] && (t = $[x][Vi] + ae + $[x][hr] + io + $[x][to]),
                    $[N][$e]({
                        url: t,
                        type: ue,
                        dataType: ne,
                        data: n,
                        error: $[H][ie],
                        success: function($) {
                            te == typeof i && i($, n)
                        }
                    })
                },
                fileLink: function(n, i) {
                    if (n = this[Fr](n),
                    $[x][U] && n[Pt](M, $[x][Wr][Pn]) == $[x][Wr]) {
                        var t = $[x][Xi] + this[qr](n[wi]($[x][Wr], Vn));
                        return void (te == typeof i && i(t, n))
                    }
                    var r = de + $[xr](n) + ve;
                    this[se](r, function(t) {
                        var r = t[re] ? t[pt][Ee] : !F;
                        return r ? void (te == typeof i && i(r, n)) : void $[bo][go]($[qt][he] + Ce + $[qt][le], !F)
                    })
                },
                setting: function(n) {
                    void M == n && (n = $[x][U] ? pe : hr);
                    var i = Ae
                      , t = Ae;
                    $[an]() && (i = Oe,
                    t = Oe),
                    $[xn][Dn](Ge) ? $[xn][Dn](Ge, function(i) {
                        i[be][ge](n),
                        $[N][fn][Ko][me][Se](!M)
                    }) : $[N][fn][Ie]($[x][Vi] + Je + n, {
                        id: me,
                        fixed: !M,
                        ico: $[H][Po](ye),
                        resize: !M,
                        title: $[qt][ye],
                        width: i,
                        height: i
                    })
                },
                copyright: function() {
                    var i = n(C)
                      , t = $[y][Be](i)
                      , r = $[xn][Dn]();
                    r[Ke][fn]({
                        id: ke,
                        bottom: M,
                        right: M,
                        simple: !M,
                        resize: !F,
                        disableTab: !M,
                        title: $[qt][Le],
                        width: Fe,
                        padding: on,
                        fixed: !M,
                        content: t({
                            LNG: $[qt],
                            G: $[x]
                        })
                    }),
                    r[N](Xe)[un](Me)
                },
                qrcode: function(n, i) {
                    _e == n[Mr](M, Hr) && (n = $[x][Vi] + n[Mr](Hr));
                    var t = $[x][Vi] + Ne + $[Qe]($[xr](n))
                      , r = Re + $[Qe](n) + He + n + we + t + Pe;
                    $[N][fn]({
                        follow: i,
                        fixed: !M,
                        resize: !F,
                        title: $[qt][Te],
                        padding: De,
                        content: r
                    })
                },
                appStore: function() {
                    var n = $[xn][Dn]();
                    n[N][fn][Ie]($[x][Vi] + xe, {
                        id: Ve,
                        fixed: !M,
                        ico: $[H][Po](ze),
                        resize: !M,
                        title: $[qt][Ve],
                        width: Ye,
                        height: Ye
                    })
                },
                openWindow: function(n, i, t, r) {
                    i = i ? i : $[qt][go],
                    t = t ? t : Ye,
                    r = r ? r : We,
                    $[an]() && (t = Oe,
                    r = Oe);
                    var o = $[xn][Dn]()
                      , e = o[N][fn][Ie](n, {
                        ico: Vn,
                        title: i,
                        fixed: !M,
                        resize: !M,
                        width: t,
                        height: r
                    });
                    return e
                },
                openWindowFull: function(n, i) {
                    return $[H][Ue](n, i, Oe, Oe)
                },
                openWindowBig: function(n, i) {
                    return $[H][Ue](n, i, qe, qe)
                },
                openDialog: function(n, i, t, r, o) {
                    if (n) {
                        void M == r && (r = je + $[Ze]());
                        var e = $c + r + nc + $[ic](n) + tc
                          , c = $[xn][Dn]()
                          , f = {
                            id: r,
                            fixed: !M,
                            title: t,
                            ico: i,
                            width: Ye,
                            height: rc,
                            padding: M,
                            content: e,
                            resize: !M
                        };
                        f = $[N][oc]({}, f, o);
                        var a = c[N][fn](f);
                        return a
                    }
                },
                openApp: function(n) {
                    if (ec == n[Rt]) {
                        var i = n[Po];
                        -F == n[Po][_r]($[x][cc]) && zr != n[Po][Pt](M, Yr) && (i = $[x][cc] + fc + n[Po]),
                        ac != typeof n[uc] && -F === n[uc][_r](dc) && (n[uc] = $[lt](n[uc])),
                        ac != typeof n[vc] && -F === n[vc][_r](dc) && (n[vc] = $[lt](n[vc])),
                        n[uc] || (n[uc] = qe),
                        n[vc] || (n[vc] = We);
                        var t = {
                            resize: n[sc],
                            fixed: !M,
                            ico: $[H][Ec](i),
                            title: n[pr][wi](hc, Vn),
                            width: n[uc],
                            height: n[vc],
                            simple: n[Cc],
                            padding: M
                        }
                          , r = $[xn][Dn]();
                        lc == $[H][pc](n[ee]) ? (t[ee] = $[H][Ac](n[ee]),
                        r[N][fn](t)) : r[N][fn][Ie](n[ee], t)
                    } else {
                        var o = n[ee];
                        $[Io](wt + o + Oc)
                    }
                },
                update: function() {
                    $[_n](function() {
                        var i = $[ce](Gc) + gc + $[Ze]();
                        n[sn](i, function($) {
                            try {
                                $[bc](Sc)
                            } catch (n) {}
                        })
                    }, vt)
                },
                openPath: function(n) {
                    $[H][ho](mc) ? $[Ic][vo][Ko](n, go) : $[H][mc](n)
                },
                explorer: function(n, i) {
                    void M == n && (n = Vn),
                    void M == i && (i = $[H][Jc](n));
                    var t = $[x][Vi] + yc + n;
                    W != typeof $[x][$o] && (t = $[x][Vi] + Bc + $[x][hr] + io + $[x][to] + Rr + n);
                    var r = $[xn][Dn]()
                      , o = r[N][fn][Ie](t, {
                        className: Kc,
                        resize: !M,
                        fixed: !M,
                        ico: $[H][Po](kc),
                        title: i,
                        width: Ye,
                        height: rc
                    })
                      , e = Et * r[N](Lc)[Pn];
                    o[Xc][Fc][Fn]({
                        left: Mc + e + _c,
                        top: Mc + e + _c
                    })
                },
                explorerCode: function(n) {
                    void M == n && (n = Vn);
                    var i = $[x][Vi] + Nc + n;
                    W != typeof $[x][$o] && (i = $[x][Vi] + Qc + $[x][hr] + io + $[x][to] + Rc + n),
                    $[I][Ie](i)
                },
                setSkinFinished: function() {
                    var n = $[N](Hc)[ei](wc);
                    n && ($[N](Pc)[ei](Tc, n),
                    $[N](Hc)[q]())
                },
                setSkin: function(n) {
                    $[Dc][Ci](xc, n),
                    $[x][rn][xc] = n;
                    var i = $[x][cc] + Vc + n + zc + $[x][Yc];
                    i != $[N](Pc)[ei](Tc) && $[N](dn)[Wc](Uc + i + qc),
                    this[Si]()
                },
                setSkinDiy: function() {
                    if ($[x][rn]) {
                        var i = $[Dc][di](xc)
                          , t = jc
                          , r = $[Dc][Zc](t);
                        fo != typeof r && fo == typeof $[x][rn][$f] && (r = $[x][rn][$f]),
                        fo != typeof r && (r = {
                            bgBlur: F,
                            bgImage: $[x][cc] + nf,
                            bgType: tf,
                            startColor: rf,
                            endColor: of,
                            colorRotate: ef
                        },
                        $[Dc][cf](t, r)),
                        $[x][rn][$f] = r;
                        var o = Vn;
                        if (ff == i && r) {
                            var e = n(l)
                              , c = $[y][Be](e);
                            o = c(r)
                        }
                        $[N][yt](o, t)
                    }
                },
                editorFull: function() {
                    var n = $[N](af);
                    n[uf](df)
                },
                language: function(n) {
                    $[vi][Ci]($t, n, it),
                    $[I][pi][li]()
                },
                fullScreen: function() {
                    vf == $[N](dn)[ei](sf) && $[H][Ef](),
                    $[N](dn)[ei](sf, vf);
                    var n = $[xn][Dn]()
                      , i = n[ln][hf];
                    i[Cf] ? i[Cf]() : i[lf] ? i[lf]() : i[pf] && i[pf]()
                },
                exitfullScreen: function() {
                    $[N](dn)[ei](sf, ai),
                    $[ln][Af] ? $[ln][Af]() : $[ln][Of] ? $[ln][Of]() : $[ln][Gf] && $[ln][Gf]()
                },
                createFlash: function(n, i, t) {
                    var r = $[Ze]();
                    (W == typeof t || Vn == t) && (t = r);
                    var o = Vn;
                    $[N][bf][gf] && $[lt]($[N][bf][Yc]) < Sf && (o = mf);
                    var e = If + r + Jf + o + yf + t + Bf + t + Kf + n + kf + n + Lf + i + Ff + r + Xf;
                    return $[_n](function() {
                        var n = $[N](Or + r);
                        if (F != n[Pn]) {
                            var i = $[xn][Dn]();
                            n = i[N](Or + r)
                        }
                        if (F == n[Pn])
                            var t = M
                              , o = n[M]
                              , e = $[Mf](function() {
                                try {
                                    t++,
                                    _f == $[Qf][Nf](o[Rf]()) ? (n[Hf](wf)[q](),
                                    $[Pf](e),
                                    e = Tf) : t > _f && (n[Hf](wf)[q](),
                                    $[Pf](e),
                                    e = Tf)
                                } catch (i) {}
                            }, _f)
                    }, Df),
                    e
                },
                userSpaceHtml: function(n) {
                    var i = n[Tt](Qi)
                      , t = $[xf](i[M])
                      , r = Vf * $[xf](i[F])
                      , o = $[w][zf]($[xf](i[M]))
                      , e = $[w][zf](r)
                      , c = o + Qi
                      , f = _f * t / r;
                    f >= _f && (f = _f);
                    var a = Vn;
                    return f >= Yf && (a = Wf),
                    M == r || $[Uf](r) ? (c += $[qt][qf],
                    f = jf) : (c += e,
                    f += dc),
                    c = Zf + a + $a + f + na + c + ia
                },
                dateTime: function(n) {
                    return $[ta]($[qt][ra], n)
                },
                uploadCheckSize: function(n) {
                    var i = $[x][ao][oa] || $[x][ao][ea];
                    return i && M != i[ca] && fa * i[ca] * fa * fa - i[aa] < n ? !F : !M
                },
                uploadCheck: function(n, i) {
                    return i = void M == i ? !M : i,
                    ua == $[x][$o] ? Yi == $[x][ro][po] : (void M == n && (n = da),
                    !$[x][U] && $[Oo][Ao](n) && F != $[Oo][n] ? (i && $[bo][go]($[qt][Go], !F),
                    !F) : $[H][va](n) ? $[x][ao] && !$[x][ao][lo][po] ? (i && ($[H][sa]($[x][So]) ? $[bo][go]($[qt][Ea], !F) : $[bo][go]($[qt][ha], !F)),
                    !F) : !M : ($[bo][go]($[qt][he], !F),
                    !F))
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$"), $("/*0)1*2)1,(#/30-1"), $("/*0)1*%,.-4(5$/30-1"), $("/*+,.$/0,,16"), $("/*+,.$/2)1,(#"), $("/*+,.$/()&"), $("/*+,.$/)1(78,2'#"), $("/*+,.$/%,.-4(5$"), $("/*.&9304$'2:;0$'+$"), $("//*())*())<(6$"), $("//*())*$#&0,."), $("//*())*,)$'=&03"), $("//*())*30-1"), $("/*0)1*+,)7.&930/30-1"), $("/*0)1*03$-$>?@/30-1"), $("0)1A)1,(#"), $("0)1B,.-4(5$"), $("5,#C))"), $(")(03D(63:'+,#$"), $("3(63:'+,#$"), $(")(03D(63>$+,#$"), $("3(63>$+,#$"), $(".$E2&.$"), $("F&'#,F"), $("+,'%&9"), $("0$-)1(0$"), $("#$%(2106"), $("3$1)$."), $("&-),.06"), $("$6+()$"), 1, $("+,-).$66"), 0, $("5,#"), $("G"), $("1,9"), $("+,'6,1$"), $("+,.$"), $(")(03H,,16"), $("&'C..(7"), $("I#$J"), $("$'J&.,'-$'0"), $("K"), $("+(+3$"), $("-&'&-&L$"), $("+,-)&1$>$M29"), $("2'#$%&'$#"), $("&6N,,0"), $(".$-,J$"), $("/-$'2O6760$-O6$00&'9"), $("(203P3$+5"), $("6760$-4$-M$./9$0"), $("6760$-K.,2)/9$0"), $("/-$'2O6760$-O9.,2)"), $("26$.P,'%&9"), $("Q"), $("('&-(0$R)$'"), $("('&-(0$"), $("#&(1,9"), $("&6=()"), $("(##P1(66"), $("M,#7"), $("F()O)(9$"), $("(67'+"), $("1&M*,03$.6*%(60P1&+5"), $("(00(+3"), $("B(60P1&+5"), $("#,+2-$'0"), $("1&J$"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2S/+,'0$;0O-$'2O&0$-"), $("0,2+360(.0"), $("3(6P1(66"), $("+,'0$;0O-$'2O&0$-"), $(")(.$'06"), $("/+,'0$;0O-$'2O&0$-"), $("0.&99$."), $("-,26$2)"), $("3&##$'"), $("+,'0$;04$'2"), $("/+,'0$;0O-$'2O&0$-/+,'0$;0O-$'2O62M-$'2"), $("-,26$#,F'"), $("+3&1#.$'"), $("/+,'0$;0O-$'2O1&60"), $("+66"), $("),&'0$.O$J$'06"), $("','$"), $("6$0H&-$,20"), $("(20,"), 400, $("M&'#"), $("30-1"), $("+1&+5"), $("1$'903"), $("0(.9$0"), $("%.(-$H,)"), $("83(.$>(0("), "", $("6$1%"), $("1,(#N&))1$"), $("("), $("M200,'"), $("/.&))1$O&0$-"), $("T)&+5$."), $("/-$'283(.$<200,'"), $("/-$'2O.$+7+1$OM200,'"), $("/6$+0&,'S/1&60"), $("/#&6(M1$#"), $("/#&6(M1$"), $("/L0.$$"), $("/#&6(M1$O.&))1$"), $("(00."), $("(U&-9"), $("#.(99(M1$"), $("%(16$"), $("(V(;8$02)"), $("9$0"), $("P,,5&$"), $("WOP8NBOHRX:Y"), $("/+,--,'O%,,0$.SZ%,.+$=()["), $("%,.+$=()"), $("6$0"), $(".$1,(#"), $("1,+(0&,'"), $("Q/\\$-SQ/]$-"), $("/+,--,'O%,,0$.SZ%,.+$=()^"), $("["), $("T_\\`M+("), $("T%%%"), $("6$085&'>&7"), $("&'&0"), $("0,,16"), $("5,#N$(#7"), $("$..,."), $("5,#N$(#7S$..,.a"), $("D,,5"), $("5,#N$(#7/$'#"), $("),.0"), $("a"), $("F$MD,60"), $(").,0,+,1"), $("**"), $("3,60'(-$"), $("*"), $("())N,,0"), $(".0.&-"), $(".$)1(+$"), $(")(03'(-$"), $("&'#$;/)3)"), $("())?'#$;"), $("10.&-"), $("())D,60"), $("&'#$;/)3)b"), $("c"), $(")(.(-N$F.&0$"), $("6$00&'96"), $("&'#$;/)3)*"), $("DR8H"), $("CddIDR8H"), $("5,#A6$.e('92(9$"), $("1('9"), 8760, $("1&M*),6370&)*VE2$.7/),6370&)/V6"), $("1&M*),6370&)*65&'/+66"), $("Z0&01$["), $("),6370&)"), $(")0&)6O65&'"), $("+2.6,."), $(".&930"), $("M,00,-"), 150, 200, 10, 20, 1500, $("0&01$O0&-$,20"), $(")(.6$?'0"), $("#(0("), $("0&01$/),6370&)"), $("0&01$O#(0("), $("&6"), $("&')20"), $("0$;0(.$("), $("J(1"), /\n/g, $("fM.*g"), $("/)0&)6O65&'"), $("6$08071$"), $("M,#7S/)0&)6O65&'h#&6)1(7a','$Si&-),.0('0jk"), $(")0&)6O0&01$"), $("&')20U0$;0(.$("), $("%,+26"), $("3&#$"), $("6$.J$.>F,'1,(#"), $("2)1,(#"), $(")1(78,2'#"), $(")1(78,2'#B&1$"), $("60.&'9"), $("07)$"), $("0.&-"), $("h"), $("62M60.&'9"), $("6)1&0"), $(")(03H7)$"), $("-(0+3"), /\{.*\}/, $("&#"), $("XR>IA8:NI8DCN:"), $("26$.O6$1%"), $("-7I63(.$"), $("eYK"), $("XR>IKNRAdIdCHD"), $("9.,2)O6$1%O,F'$."), $("XR>IKNRAdI8DCN:"), $("9.,2)O92$60"), $("XR>IA8:NI8:eB"), $("XR>IA8:NIN:P@Pe:"), $(".$+7+1$"), $("XR>IA8:NIBCl"), $("0.$$O%(J"), $("%(J"), $("XR>IKNRAdINRRHI8:eB"), $("9.,2)O6$1%O.,,0"), $("-7I5,#I9.,2)"), $("XR>IKNRAdINRRHICee"), $("9.,2)O.,,0"), $("5,#I9.,2)"), $("26$.?>"), $("26$."), $(",F'$."), $(".,1$"), $("'(-$"), $("8H"), $("/"), $("CPH"), $("63(.$/%&1$"), $("()&/J&$F"), /\{.*\}/, /\{.*\}/, $("$J$'0"), $(")"), $(").$"), $("/+('O.&930O-$'2"), $("/0,)M(."), $("/$#&0OM,#7"), $("/(2&O60(0$O%,+26"), $(")(03P1$(."), $("1(60?'#$;R%"), $("62M60."), $("6$(.+3"), $("%&1$d.,;7"), $("2.1>$+,#$"), $("m)(03^"), 2, /\\/g, /\/+/g, /\.+\//g, $("0,e,F$.P(6$"), $("2.1:'+,#$"), /%2F/g, $("300)"), 4, $("F$MN,,0"), $("M(6&+d(03"), $(")(03A.1:'+,#$"), $("$;)1,.$.*%&1$d.,;7m(++$66H,5$'^"), $("(++$66H,5$'"), $("63(.$d(9$"), $("63(.$*%&1$d.,;7m26$.^"), $("m6&#^"), $("6&#"), $("63(.$?'%,"), $("P,'%&9"), $(")(9$C))"), $("&6C..(7"), $(",MV$+0"), $("V6,'>(0("), $("%&1$e&60"), $(")(03"), $("&6N$(#(M1$"), $("%,1#$.e&60"), $("&6C))"), $("$#&0,."), $("&'%,"), $("+('A)1,(#"), $("3(6RF'd.,)$.07"), $("CAHD"), $("',I)$.-&66&,'"), $("0&)6"), $("H&)6"), $("03&6d(03"), $("(203K.,2)N,1$"), $("$J(1"), $("ano#pq*"), $(".$6),'6$H$;0"), $("(V(;:..,.>&(1,9"), $("1&60"), $("+1,6$"), $("6760$-I$..,."), $("fiOO26$.S1,9&'OOg"), 17, 500, $("60(026"), $("rstuvwSn'$0aa:NNIPRYY:PH?RYIN:8:Hqxtuyz{fM.*g|", 90, 91, 92, 93, 94, 95, "r", 96, "x", 97, 98, 99, 100, 101, 102, "{", 103, ""), $("f#&JS+1(66^", 104, "(V(;:..,.", 104, "g"), $("f*#&Jg"), $(105, "Q", 106, ""), $(105, 107, 106, ""), $("&+,'"), $("CV(;S:..,."), $("&%.(-$D0-1"), $("/(V(;:..,.>&(1,9S/(2&O+,'0$'0"), $("%&1$'(-$"), $("%&1$A.1"), $("$#&0,.*%&1$K$0m"), $("^"), $("63(.$*%&1$K$0m26$.^"), $("m"), $("&'#$;R%"), $("63(.$*%&1$K$0m"), $("(V(;"), $("V6,'"), $("(V(;:..,."), $("%2'+0&,'"), $("+,#$"), $("M(6$", 105, "_"), $("+,'0$'0"), $("M(6$", 105, "_>$+,#$"), $("$;)1,.$.*)(03?'%,"), $("63(.$*)(03?'%,m26$.^"), $("dR8H"), $("#(0(C..^Zh", 104, "07)$", 104, "a", 104, "%&1$", 104, "U", 104, ")(03", 104, "a", 104, ""), $(104, "k[mJ&$Fd(9$^c"), $("%&1$?'%,"), $("#,F'1,(#d(03"), $("',I)$.-&66&,'I(+0&,'"), $("^^g"), $("9.,2)I.,1$I)(03&'%,"), $("6760$-"), $("`", 107, 106, ""), $("cQQ", 106, ""), $("R)$'6$00&'9I-,#$"), $("6$0K,0,"), $("8$00&'9"), $("#&6)1(7"), $("6$00&'9I-,#$"), $(",)$'"), $("6$00&'9T"), $("6$00&'9"), $("+,-)&1$"), $("(.0"), $("#&(1,9O+,)7.&930"), $("(M,20"), 425, $("/#&(1,9O+,)7.&930"), $("('&-(0$#O", 108, "QQSL,,-?'"), $("/*"), $("26$.*E.+,#$m2.1^"), $("E2,0$D0-1"), $("f(S3.$%^", 109, ""), $(109, "S6^", 109, ""), $(109, "S0(.9$0^", 109, "IM1('5", 109, "gf&-9S6.+^", 109, ""), $(109, "S6071$^", 109, "M,.#$.ac);S6,1&#ST$$$j", 109, "*gf*(g"), $("E.+,#$"), 30, $("())"), $("())I60,.$"), $("())O60,.$"), $("`Q", 106, ""), $(108, "Q", 106, ""), $(",)$'=&'#,F"), $(110, "Q", 106, ""), $(",)$'>&(1,9"), $("AA?>"), $("f&%.(-$S%.(-$M,.#$.^", 109, "Q", 109, "S'(-$^", 109, "R)$'"), $(109, "S6.+^", 109, ""), $("30-1:'+,#$"), $(109, "S6071$^", 109, "F&#03acQQ", 106, "j3$&930acQQ", 106, "jM,.#$.aQj", 109, "gf*&%.(-$g"), $(108, 107, 106, ""), $("$;0$'#"), $("2.1"), $("60(0&+d(03"), $("&-(9$6*%&1$I&+,'*&+,'I())*"), $("'2-M$."), $("F&#03"), $(106, ""), $("3$&930"), $(".$6&L$"), $("&+,'8.+"), $("/,$;$"), $("6&-)1$"), $("6F%"), $(")(03:;0"), $("+.$(0$B1(63"), $("k"), $("e7", 110, "L#KBQ(=42(\\", 110, "5@\\;J#=", 111, "2@\\", 110, "0e]lF", 112, "KBQ", 112, "8", 110, "0@=12YP", 107, "E+F^^"), $("b(^"), $("0,#,"), $("+3$+5"), $("$;)1,.$."), $("2&"), $(")(03H3&6"), $("$;)1,.$.m07)$^&%.(-$m)(03^"), $("63(.$*%,1#$.m07)$^&%.(-$m26$.^"), $("#&(1,9:;)1,.$."), $("%,1#$."), $("/#&(1,9:;)1,.$."), $("F.()"), $(">R4"), $("p^"), $(");"), $("$#&0,.m).,V$+0^"), $("63(.$*+,#$N$(#m26$.^"), $("m).,V$+0^"), $("/1&'5O03$-$O1,(#$#"), $("6.+"), $("T1&'5O03$-$O6071$"), $("3.$%"), $("e,+(1>(0("), $("03$-$"), $("6071$*65&'*"), $("/+66bJ$.^"), $("J$.6&,'"), $("())$'#"), $("f&-9S6.+^", 104, ""), $(104, "S,'1,(#^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S,'$..,.^", 104, "+,.$/6$085&'B&'&63$#nqj", 104, "S+1(66^", 104, "3&##$'S1&'5O03$-$O1,(#$#", 104, "g"), $("5,#8071$>&7"), $("9$0P,'%&9"), $("03$-$>?@"), $("&-(9$6*F(11I)(9$*", 110, "/V)9"), $("+,1,."), $("T_", 107, 105, ""), $("TQQQ"), $("\\QQ"), $("6$0P,'%&9"), $("#&7"), $("&%.(-$Z'(-$^R)$',)$':#&0,.["), $("0,991$P1(66"), $("%.(-$O%2116+.$$'"), $("0.2$"), $("%2118+.$$'"), $("$;&0%2118+.$$'"), $("#,+2-$'0:1$-$'0"), $(".$E2$60B2116+.$$'"), $("-,LN$E2$60B2118+.$$'"), $("F$M5&0N$E2$60B2118+.$$'"), $("$;&0B2116+.$$'"), $("-,LP('+$1B2118+.$$'"), $("F$M5&0P('+$1B2118+.$$'"), $("-6&$"), $("M.,F6$."), 9, $("+1(66&#^", 104, "+16&#a#\\", 108, "+#M", 105, "$O($", 105, "#Occ+%O", 110, 105, "M`O___", 107, 107, "]", 107, "_QQQQ", 104, ""), $("f,MV$+0S07)$^", 104, "())1&+(0&,'*;O63,+5F(J$O%1(63", 104, "S+1(66^", 104, ""), $(104, "S"), $("S'(-$^", 104, ""), $(104, "S&#^", 104, ""), $(104, "S#(0(^", 104, ""), $(104, "SF&#03^", 104, "cQQ", 106, 104, "S3$&930^", 104, "cQQ", 106, 104, "S0(M&'#$;^", 104, "Oc", 104, "Sgf)(.(-S'(-$^", 104, "-,J&$", 104, "SJ(12$^", 104, ""), $(104, "*gf)(.(-S'(-$^", 104, "(11,F%2116+.$$'", 104, "SJ(12$^", 104, "0.2$", 104, "S*gf)(.(-S'(-$^", 104, "(11,F6+.&)0(++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "(11,F8+.&)0C++$66", 104, "SJ(12$^", 104, "(1F(76", 104, "S*gf)(.(-S'(-$^", 104, "%1(63J(.6", 104, "SJ(12$^", 104, ""), $(104, "S*gf)(.(-S'(-$^", 104, "F-,#$", 104, "SJ(12$^", 104, "0.('6)(.$'0", 104, "S*gf*,MV$+0gf#&JS+1(66^", 104, "(2&O1,(#&'9", 104, "S&#^", 104, ""), $("I1,(#&'9", 104, "gf6)('g1,(#&'9//f*6)('gf*#&Jg"), $("6$0?'0$.J(1"), 100, $("%1,,."), $("4(03"), $("d$.+$'0e,(#$#"), $("'$;0"), $("/(2&O1,(#&'9"), $("+1$(.?'0$.J(1"), null, 50, $(")(.6$B1,(0"), 1073741824, $("%&1$8&L$"), 80, $("F(.'&'9"), $("&6Y(Y"), $("6)(+$I0&)6I%211"), $("Q", 106, ""), $("f#&JS+1(66^", 109, "6)(+$O&'%,OM(.", 109, "gf#&JS+1(66^", 109, "6)(+$O).,+$66", 109, "gf#&JS+1(66^", 109, "6)(+$O).,+$66O26$S"), $(109, "S6071$^", 109, "F&#03a"), $(109, "gf*#&Jgf*#&Jgf#&JS+1(66^", 109, "6)(+$O&'%,", 109, "g"), $("f*#&Jgf*#&Jg"), $("#(0$"), $("0&-$I07)$"), $("9.,2)8)(+$A6$"), $("26$.8)(+$"), $("6&L$4(;"), 1024, $("6&L$A6$"), $("63(.$"), $("$;)1,.$./%&1$A)1,(#"), $("(203P3$+5K.,2)"), $("&68760$-d(03"), $(")(03I+('I',0I(+0&,'"), $("',I)$.-&66&,'IF.&0$"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var i = arguments, t = "", r = 0, o = i.length; o > r; r++)
            if ("number" == typeof i[r])
                t += n($[0].charAt(i[r]));
            else
                for (var e = 0, c = i[r].length; c > e; e++)
                    t += n($[0].charAt(i[r][e].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1woxkPnv|VjH{EZGL\\XIDKtz'WbyJ}eU0F3R#&/m[NQ^`56@7;=B4SO?A~$>Y)+_.,罔统迡推锜诲／巵釐罱诺聗糾举朽啉戙箤棃柨阵灮墜酐＄%9(8:*<T]"]));
;define("app/common/tpl/upload.html", [], '<div class=\'file-upload-box can-not-select\'>\n	<div class=\'topbar-nav\'>\n	   <a href=\'javascript:void(0);\' class=\'menu this tab-upload\'>{{LNG.upload_local}}</a>\n	   <a href=\'javascript:void(0);\' class=\'menu tab-download\'>{{LNG.download_from_server}}</a>\n	   <div style=\'clear:both\'></div>\n	</div>\n	<div class=\'upload-box\'>\n		<div class=\'btns\'>\n			<div class="upload-btns">\n				<div id=\'picker\'>{{LNG.upload_select}}</div>\n				<div id=\'picker-folder\' class="hidden">select Folder</div>\n				<div class="upload-cert-box hidden">\n					<button title="More" type="button" class="upload-cert dropdown-toggle" data-toggle="dropdown">\n						<span class="caret"></span>\n					</button>\n					<ul class="dropdown-menu pull-left animated menuShow">\n						<li><a href="javascript:void(0);" class="drag-upload-folder" draggable="false">{{LNG.folder}} {{LNG.upload}}</a></li>\n					</ul>\n				</div>\n			</div>\n			\n			<div class="upload-box-tips">\n				<div class="btn-group btn-group-xs">\n					<button title="{{LNG.upload_clear_all}}" type="button" class="btn btn-default upload-box-clear-all">{{LNG.upload_clear_all}}</button>\n					<button title="{{LNG.upload_clear}}" type="button" class="btn btn-default upload-box-clear">{{LNG.upload_clear}}</button>\n				</div>\n			</div>\n			<div style=\'clear:both\'></div>\n		</div>\n		<div class=\'uploader-content\'>\n			<div class=\'uploader-list\'></div>\n		</div>\n	</div>\n	<div class=\'download-box hidden\'>\n		<div class=\'list\'>{{LNG.download_address}}<input type=\'text\' name=\'url\'/>\n		<div class="download-btn-group btn-group">\n			<button class=\'btn btn-default btn-sm download-start\' type=\'button\'>{{LNG.download}}</button>\n			<button type="button" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="caret"></span>&nbsp;\n				<span class="sr-only">Dropdown</span>\n			</button>\n			<ul class="dropdown-menu">\n				<li><a href="javascript:void(0);" class="download-start-all">{{LNG.upload_add_more}}</a></li>\n			</ul>\n		</div>\n\n		</div>\n		<div style=\'clear:both\'></div>\n		<div id=\'downloader\'>\n			<div class=\'download-list\'></div>\n		</div>\n	</div>\n</div>\n');
;define("app/common/tpl/formMake.html", [], '<div id="{{wrapID}}" class=\'config-box form-box can-not-select\n	{{if items.formStyle && items.formStyle.className}}{{items.formStyle.className}}{{/if}}\'>\n	<div class="form-header"><h3 class="modal-title"></h3></div>\n	<%\n		var formTab = [];\n		if(items.formStyle && kod.window.$.isArray(items.formStyle.tabs)){\n			formTab = items.formStyle.tabs;\n		}\n	%>\n	{{if formTab}}\n		<ul class="tab-group" role="tablist">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n					<li class="tab-item {{if tabIndex==0}}active{{/if}}">\n						<a href="javascript:void(0);" class="disable-ripple" draggable="false"\n						data-id="{{wrapID}}-{{tabIndex}}">{{tab.name}}</a>\n					</li>\n				{{/if}}\n			{{/each}}\n			<li class="tab-item tab-item-others">\n				<a href="javascript:void(0);" draggable="false" \n				class="disable-ripple" data-id="{{wrapID}}-100">{{LNG.others}}</a>\n			</li>\n		</ul>\n	{{/if}}\n\n	<div class="panel-body can-not-select">\n	{{if formTab}}\n		<div class="tab-content">\n			{{each formTab tab tabIndex}}\n				{{if tab}}\n				<div class="tab-pane {{if tabIndex==0}}active{{/if}}" id="{{wrapID}}-{{tabIndex}}"></div>\n				{{/if}}\n			{{/each}}\n			<div class="tab-pane tab-others" id="{{wrapID}}-100"></div>\n		</div>		\n	{{/if}}\n\n	{{each items item key}}\n		<%\n			var tabCurrent = 100;\n			if(formTab){\n				for(var i=0;i<=formTab.length;i++){\n					if( formTab[i] && kod.window.inArray(formTab[i][\'field\'],key)){\n						tabCurrent = i;\n						break;\n					}\n				}\n			}\n\n			//元素属性;\n			var itemAttr = " ";\n			if(typeof(item.itemAttr) == \'object\'){\n				for(var prop in item.itemAttr){\n					itemAttr += prop+"=\'"+item.itemAttr[prop]+"\' ";\n				}\n				if(item.itemStyle){\n					itemAttr += "style=\'"+item.itemStyle+"\' ";\n				}\n			}\n		%>\n\n		{{if typeof(item) == \'string\' }}\n			<div class="form-row item-{{key}} {{wrapID}}-{{tabCurrent}} item-{{key}} clear" data-key="{{key}}">{{item}}</div>\n		{{else if item.type == "html" || !item.type}}\n			{{if key != \'formStyle\'}}\n				<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}} clear" \n					data-type="{{item.type}}" data-key="{{key}}" {{itemAttr}}>\n					\n					{{if typeof(item.display) !=\'undefined\' }}\n					<div class="setting-title">\n						{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n					</div>\n					{{/if}}\n\n					{{if item.value}}{{@item.value}}{{/if}}\n					{{if item.display}}{{@item.display}}{{/if}}\n					{{if item.desc}}{{@item.desc}}{{/if}}\n				</div>\n			{{/if}}\n		{{else}}\n			{{if item.value == undefined }}\n				{{if item.value = \'\'}}{{/if}}\n			{{/if}}\n			<div class="form-row item-{{key}} form-{{item.type}} {{wrapID}}-{{tabCurrent}} {{item.className||\'\'}}"\n				data-type="{{item.type}}" data-key="{{key}}">\n\n				{{if typeof(item.display) !=\'undefined\' }}\n				<div class="setting-title">\n					{{@item.display}} {{if item.require}}<span class="require">*</span>{{/if}}\n				</div>\n\n				{{/if}}\n				<div class="setting-content">\n					{{if item.type == \'input\'}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "textarea"}}\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "codeEditor"}}\n						<input type=\'hidden\' name="{{key}}" type=\'hidden\' class="{{item.itemClass||\'\'}}" {{itemAttr}} />\n						<textarea name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>{{@item.value}}</textarea>\n					{{else if item.type == "password"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="password" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "switch"}}\n						<label>\n							<input type="checkbox" class="{{item.itemClass||\'\'}} kui-checkbox-ios size-big" name="{{key}}" \n								{{if item.value==1 }}checked="checked"{{/if}} {{itemAttr}}/><em></em>\n								<i class="desc">&nbsp;{{if item.desc}}{{@item.desc}}{{/if}}</i>\n						</label>\n					{{else if item.type == "radio"}}\n						{{each item.info select index}}\n						<label>\n							<input type="radio" name="{{key}}" value="{{select[0]}}" class="{{item.itemClass||\'\'}} kui-radio"\n							{{if item.value==select[0]}}checked="checked"{{/if}} {{itemAttr}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "checkbox"}}\n						<%\n							var valArrCheckbox = [];\n							if(typeof(item.value) == \'string\'){\n								valArrCheckbox = item.value.split(\',\');\n							}\n						%>\n						{{each item.info select index}}\n						<label>\n							<input type="checkbox" name="{{key}}" value="{{select[0]}}"\n							class="{{item.itemClass||\'\'}} kui-checkbox" {{itemAttr}} \n							{{if kod.window.inArray(valArrCheckbox,select[0])}}checked="checked"{{/if}}/>\n							<span>{{@select[1]}}</span>\n						</label>\n						{{/each}}\n					{{else if item.type == "select"}}\n						<select name="{{key}}" class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n							<option value="{{select[0]}}"\n							 {{if item.value==select[0]}}selected="true"{{/if}}>{{@select[1]}}</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "segment"}}\n						<input type="input" class="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="{{item.itemClass||\'\'}} btn-group btn-group-sm" {{itemAttr}} \n							data-json=\'{{kod.window.jsonEncode(valueArr)}}\'>\n							{{each item.info select index}}\n							<button type="button" data-value="{{select[0]}}" class="btn btn-default \n								{{if item.value==select[0]}}btn-active{{/if}}">{{@select[1]}}</button>\n							{{/each}}\n						</div>\n					{{else if item.type == "button"}}\n						{{each item.info select index}}\n						<% var className = select.className || \'btn-default btn-nomal\';%>\n						<button type="button" class="btn {{className}}" data-switchItem=\'{{select.switchItem || ""}}\'>\n							{{select.display}}\n						</button>\n						{{/each}}						\n					{{else if (item.type == "selectMutil" || item.type == "tags")}}\n						<%\n							var valArrSelect = [];\n							if(typeof(item.value) == \'string\'){\n								valArrSelect = item.value.split(\',\');\n							}\n							if(item.type == \'tags\'){\n								item.info = [];\n								for(var i=0;i<valArrSelect.length;i++)\n								item.info.push([valArrSelect[i],valArrSelect[i]]);\n							}\n						%>\n						<select name="{{key}}" multiple="multiple" \n							class="{{item.itemClass||\'\'}}" {{itemAttr}}>\n							{{each item.info select index}}\n								<option value="{{select[0]}}"\n									{{if kod.window.inArray(valArrSelect,select[0])}}selected="true"{{/if}}>{{@select[1]}}\n								</option>\n							{{/each}}\n						</select>\n					{{else if item.type == "number"}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						{{if !item.info && (item.info = {from:\'\',to:\'\',step:1}) }}{{/if}}\n						<input type="number" name="{{key}}" value="{{item.value}}" \n							autocomplete="off" spellcheck="false" {{itemAttr}}\n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} "\n							step="{{item.info.step}}" min="{{item.info.from}}" max="{{item.info.to}}"/>\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{else if item.type == "slider"}}\n						{{if !item.info && (item.info = {from:0,to:100,step:1}) }}{{/if}}\n						<input type="text" name="{{key}}" class="{{item.itemClass||\'\'}} control-slider"\n							{{itemAttr}}\n							data-slider-min="{{item.info.from}}"\n							data-slider-max="{{item.info.to}}"\n							data-slider-step="{{item.info.step}}"\n							data-slider-value="{{item.value}}"/>\n					{{else if item.type == "color"}}\n						<input type="text" name="{{key}}" value="{{item.value}}"\n							class="{{item.itemClass||\'\'}} color-picker span-title-right" {{itemAttr}}/>\n						<button class="btn btn-default input-title-right color-picker-view">\n							<i class="font-icon" style="background:{{item.value}}"></i>\n						</button>\n					{{else if item.type == "dateTime"}}\n						<input type="text" name="{{key}}" \n							class="{{item.itemClass||\'\'}} span-title-right" \n							{{itemAttr}}\n							value="{{item.value}}" \n							data-format="{{item.info && item.info.format || \'Y/m/d\'}}" \n							data-fromTime="{{item.info && item.info.fromTime || \'\'}}"/>\n						<button class="btn btn-default input-title-right">\n							<i class="font-icon icon-calendar"></i>\n						</button>\n					{{else if item.type == "fileSelect"}}\n						<input type="text" name="{{key}}" value="{{item.value}}" \n							data-info=\'{{item.info?kod.window.jsonEncode(item.info):""}}\' \n							{{itemAttr}}\n							class="{{item.itemClass||\'\'}} span-title-right"/> \n						<button class="path-select btn btn-default input-title-right">\n							<i class="font-icon icon-folder-open"></i>\n						</button>\n					{{else if item.type == "userSelect"}}\n						<% \n							var valueArr = {"all":"0","user":"","group":"","role":""};\n							if(typeof(item.value) == \'string\'){\n								userTypeArr = item.value.split(\';\');\n								for(var i = 0;i<userTypeArr.length;i++){\n									var splitArr = userTypeArr[i].split(\':\');\n									if(splitArr.length == 2){\n										valueArr[splitArr[0]] = splitArr[1];\n									}\n								}\n								if(!valueArr.user && !valueArr.group && !valueArr.role){\n									valueArr.all = \'1\';\n								}\n							}\n						%>\n						<input type="hidden" name="{{key}}" value="{{item.value}}"/>\n						<div class="btn-group btn-group-sm" data-json=\'{{kod.window.jsonEncode(valueArr)}}\'\n							{{if !item.info || item.info.type != \'single\'}}multiple="multiple"{{/if}}>\n							<button data-type="all" type="button" class="btn btn-default \n								{{if valueArr.all == "1"}}btn-active{{/if}}">{{LNG[\'Plugin.config.authAll\']}}</button>\n							<button data-type="user" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.user}}btn-active{{/if}}">{{LNG[\'Plugin.config.authUser\']}}</button>\n							<button data-type="group" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.group}}btn-active{{/if}}">{{LNG[\'Plugin.config.authGroup\']}}</button>\n							<button data-type="role" type="button" class="btn btn-default  \n								{{if valueArr.all != "1" && valueArr.role}}btn-active{{/if}}">{{LNG[\'Plugin.config.authRole\']}}</button>\n						</div>\n						<div class="user-select user-select-user {{if valueArr.all == "1" || !valueArr.user}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.user}}</div>\n							<select data-value="{{valueArr.user}}" data-server="user"\n								{{if !item.info || item.info.user != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-group {{if valueArr.all == "1" || !valueArr.group}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.group}}</div>\n							<select data-value="{{valueArr.group}}" data-server="group"\n								{{if !item.info || item.info.group != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n						<div class="user-select user-select-role {{if valueArr.all == "1" || !valueArr.role}}hidden{{/if}}">\n							<div class="desc font-bold">{{LNG.system_member_role}}</div>\n							<select data-value="{{valueArr.role}}" data-server="role"\n								{{if !item.info || item.info.role != \'single\'}}multiple="multiple"{{/if}}></select>\n						</div>\n					{{else if item.type == "group"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="group"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "role"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="role"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else if item.type == "user"}}\n						<select name="{{key}}" data-value="{{item.value}}" data-server="user"\n							{{if item.info != \'single\'}}multiple="multiple"{{/if}}></select>\n					{{else}}\n						{{if item.titleLeft}}<span class="input-title-left">{{item.titleLeft}}</span>{{/if}}\n						<input type="text" name="{{key}}" value="{{item.value}}" {{itemAttr}} \n							class="{{item.itemClass||\'\'}} \n							{{if item.titleLeft}}span-title-left{{/if}} \n							{{if item.titleRight}}span-title-right{{/if}} ">\n						{{if item.titleRight}}<span class="input-title-right">{{item.titleRight}}</span>{{/if}}\n					{{/if}}\n\n					{{if item.type == "switch"}}\n					{{else if !item.desc}}\n						<i class="desc hidden">&nbsp;</i>\n					{{else if kod.inArray([\'userSelect\'],item.type)}}\n						<div class="desc">{{@item.desc}}</div>\n					{{else}}\n						<i class="desc">{{@item.desc}}</i>\n					{{/if}}\n				</div>\n\n				{{if item.switchItem && kod.inArray(\'switch/radio/checkbox/select/segment\'.split(\'/\'),item.type) }}\n				<div class="hidden switch-info" data-value=\'{{kod.window.jsonEncode(item.switchItem)}}\'></div>\n				{{/if}}\n\n				<div class="clear"></div>\n			</div>\n		{{/if}}\n	{{/each}}\n	</div>\n</div>');
;!function($) {
    !function($, n, r, t, o, c, i, f, u, a, A, e, J, p, d, v, G, X, h, C, q, s, N, O, Q, S, l, R, V, b, F, M, g, m, y, D, P, _, T, Y, k, B, H, L, W, j, E, I, K, Z, w, x, U, z, $n, nn, rn, tn, on, cn, fn, un, an, An, en, Jn, pn, dn, vn, Gn, Xn, hn, Cn, qn, sn, Nn, On, Qn, Sn, ln, Rn, Vn, bn, Fn, Mn, gn, mn, yn, Dn, Pn, _n, Tn, Yn, kn, Bn, Hn, Ln, Wn, jn, En, In, Kn, Zn, wn, xn, Un, zn, $r, nr, rr, tr, or, cr, ir, fr, ur, ar, Ar, er, Jr, pr, dr, vr, Gr, Xr, hr, Cr, qr, sr, Nr, Or, Qr, Sr, lr, Rr, Vr, br, Fr, Mr, gr, mr, yr, Dr, Pr, _r) {
        $[r](t, [], function(n) {
            var r = o
              , t = function() {
                var n = $[c](i);
                f != $[a][u],
                $[A](n),
                $[J][e](n, !p),
                $[v](G)[d](),
                $[X](function() {
                    $[J][h](n, !p),
                    $[s][q][C] = r
                }, N * $[O](Q, S))
            }
              , Tr = function() {
                var r = l;
                $[X](function() {
                    if (!$[s][R] || V == typeof $[b]) {
                        var r = F + $[M]();
                        n[g](r, function(n) {
                            $[s][R] = !m;
                            try {
                                n[y]()
                            } catch (r) {}
                        })
                    }
                }, N * $[O](D, Q)),
                $[a][P] = $[_]($[a][P][k](B)[Y]()[T](B));
                var t = $[L][H]($[a][P], W);
                r = t[j](D, p),
                t && E == t[I] || (r = l);
                var o = $[_]($[a][K]);
                o = o[k](B)[Y]()[T](B),
                o = $[L][H](o, Z);
                var c = o[j](w, p);
                return $[a][K] = $[L][H](o[j](x), o[j](m, w)),
                c == r && $[a][K] && U == $[a][K][I] || ($[v][z]($n),
                r = l),
                -p === $[v][nn](r, [l, rn, tn, on, cn, fn, un]) && (r = l),
                r
            }
              , Yr = l;
            try {
                Yr = Tr()
            } catch (kr) {}
            var Br = an
              , Hr = An
              , Lr = function() {
                if ($[Jn][en](pn) && l == Yr)
                    for (var n = [$[vn][dn], $[vn][Gn], $[vn][Xn], $[vn][hn], $[vn][Cn], $[v](sn)[qn]()], r = m; r < n[I]; r++) {
                        n[r] || (n[r] = B);
                        var o = n[r][Nn]();
                        if (-p == o[On](Br) && -p == o[On](Hr)) {
                            $[X](function() {
                                t()
                            }, $[O](Qn, Sn));
                            break
                        }
                    }
            }
              , Wr = function() {
                var n = {
                    A: ln,
                    O: Rn,
                    P: Vn,
                    Q: bn,
                    R: Fn,
                    S: Mn,
                    T: gn
                }
                  , t = mn + n[Yr]
                  , o = yn + t + Dn + $[vn][t] + Pn;
                l == Yr && $[v](o)[_n](Tn),
                $[v](Bn)[kn](Hn)[Yn](Hn, function() {
                    if (Ln == $[v](this)[Wn](jn)) {
                        var n = $[Jn][En]($[Jn][In])
                          , t = Kn + r + Zn;
                        n[zn][Un][xn]($r)[wn](t)
                    } else
                        $[J][h]($[v](this)[nr]())
                }),
                $[v](Bn)[rr](function() {
                    $[s][tr][q][C] = r
                })
            }
              , jr = function() {
                l == Yr && $[v](cr)[or](ir),
                -p !== $[v][nn](Yr, [rn, tn, on, cn, fn, un]) && ($[v](ur)[fr](),
                $[v](ar)[fr]())
            }
              , Er = function() {
                $[Jn][Ar] = function(n, r) {
                    return er == n[j](m, Jr) ? $[Jn][pr](n) : dr + n + (r ? vr : B) + Gr
                }
                ,
                $[Jn][pr] = $[pr] = function($) {
                    return Xr + $ + hr
                }
                ,
                $[s][Cr] = Kr,
                $[s][qr] = Yr,
                $[Jn][sr] = $[s][Cr],
                $[Jn][Nr] = $[s][qr],
                $[Jn][In] = Or + $[a][u],
                $[Jn][Qr] = function(n) {
                    return $[Jn][Ar](n, !m)
                }
                ,
                $[X](function() {
                    var r = F + $[M]();
                    n[g](r, function(n) {
                        $[s][R] = !m;
                        try {
                            n[y]()
                        } catch (r) {}
                    })
                }, Sr),
                Lr(),
                Wr(),
                jr()
            }
              , Ir = function($) {
                return l == Yr && -p == $[Nn]()[On](Br) ? (t(),
                !p) : !m
            }
              , Kr = function(n, r) {
                $[s][lr] = {
                    A: p,
                    O: Rr,
                    P: Vr,
                    Q: br,
                    R: Fr,
                    S: N,
                    T: N
                },
                $[s][Mr] = {
                    A: Rr,
                    O: gr,
                    P: mr,
                    Q: yr,
                    R: Dr,
                    S: N,
                    T: N
                };
                var t, o, c = $[s][lr], i = $[s][Mr], f = [], u = p;
                if (Pr == r ? (t = n[_r],
                o = c[Yr]) : (t = n[_r],
                o = i[Yr]),
                N == o)
                    f = t;
                else
                    for (var a in t) {
                        if (u > o)
                            break;
                        f[a] = t[a],
                        u++
                    }
                return f
            }
              , Zr = {
                init: Er,
                about: Ir
            };
            return Zr
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0,,12"), $("/*342$.*5$.2&,'6'20(11"), $("7(278$+,#$"), $("9:;-<=>:?@&50A(B?5A((C7$&DE4FAG.4(H4$$I&@(#JK51),?-'6')'68,),D,.L%,J=C'2L5,0:MN4G8556O1GBO)G8).G;PQG>RS=TUV+F<QG;WA+"), $("K7XYZ"), $("1('J"), $(">"), $("(1$.0"), $("1,(#&'J"), $("C&)2"), 1, $("7&#$"), $("["), $("\\-$22(J$C&)2]/0&)2A+1,2$^\\-$22(J$C&)2]&-J"), $("2$0C&-$,40"), $("0&)2"), $("7.$%"), $("1,+(0&,'"), $("_&'#,_"), 1e3, $(".,4'#O.,-C,"), 30, 60, $("`"), $("(<#abM+LMWba%#RS9GMG9"), $("4'#$%&'$#"), $("0)18&(1,JD0-1"), $("**20(0&+/N,#+1,4#/+,-*4)#(0$*-(&'a/Q235c"), $("0&-$O1,(0"), $("(2d'+"), 0, $("0,#,"), 10, $("5$.2&,'D(27"), $("G(2$9a8$+,#$"), $("Q,&'"), $(".$5$.2$"), $("2)1&0"), "", $("#$+,#$"), $("(407Y.d)0"), $("e#%EfXghijiklARW"), $("24G20."), 27, $("1$'J07"), $("5$.2&,'D(27H2$."), $("%Ma;jhil:IOF8R%#Q5"), 16, 17, 32, $("J$0"), $("/*&'#$V/)7)342$.*5$.2&,'6'20(11h.$2$0cS"), $("&'`..(d"), $("@"), $("m"), $("n"), $("P"), $("F"), $("C"), $("N,#$V)1,.$."), $("N,#+1,4#"), $("&2`))"), $("+,.$"), $("$V)1,.$."), $("N,#A),_$.AGd"), $("?Z>"), $("+,)d.&J70A).$"), $("+,)d.&J70A+,'0(+0"), $("+,)d.&J70A#$2+"), $("+,)d.&J70A&'%,"), $("70-1"), $("/+,--,'X%,,0$."), $("0,?,_$.Y(2$"), $("2$(.+7"), 300, 5e3, $("%.$$"), $("S"), $(";"), $("M"), $("a"), $("<"), $("9"), $("5$.2&,'A5&)A"), $("o2)(']+1(22cp5$.2&,'X5&)p]&#cp"), $("pqo&]+1(22cp%,'0X&+,']&+,'XN$dpqo*&q"), $("o*2)('q"), $("&'2$.0`%0$."), $("/-$'4X2d20$-X(G,40"), $("1&5$"), $("#&$"), $("/5$.2&,'X5&)"), $("+1&+N"), $("5$.2&,'A5&)A%.$$"), $("(00."), $("&#"), $(",)$'B&'#,_"), $("5$.2&,'H)#(0$r&)"), $("o#&5]+1(22cp5$.2&,'X1&+$'2$pqo(]+1(22cp1&'$p]7.$%cp"), $("pqstuvo*(qo*#&5q"), $("())$'#"), $("%&'#"), $("_.()"), $("8@w"), $("/(4&X+,'0$'0"), $("0$V0"), $("1,'Jm.$22"), $("0,)"), $("(##Y1(22"), $("G,#d"), $("24)),.0X2)(+$X',0"), $(".$-,5$"), $("/-$'4X2d20$-X(G,40^/-$'4X1$%0]\\(G,40"), $("\\).,J.(-2]/2$00&'JA(G,40^\\).,J.(-2]/2$00&'JA7,-$)(J$^\\).,J.(-2]/7,-$A)(J$"), $("&+,'"), $("700)"), 4, $("&+,'F.+"), $("o&]+1(22cpVX&0$-X%&1$]VX"), $("]2-(11"), $("pqo*&q"), $("o&-J]2.+cp"), $("p]#.(JJ(G1$cp%(12$p],'#.(J20(.0cp.$04.']%(12$xpq"), $("+,.$A0,,12A2d20$-8(0("), $("+,.$A0,,12A5$.2&,'Cd)$"), $("2d20$-8(0("), $("5$.2&,'Cd)$"), $("**N,#+1,4#/+,-*G4d/70-1\\"), $("&+,'F-(11"), 2e3, $("+,.$A0,,12AJ.,4)?&-&0"), 5, 20, 40, 100, $("+,.$A0,,12A-$-G$.?&-&0"), 15, 50, 150, 500, $("J.,4)"), $("#(0("))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var r = arguments, t = "", o = 0, c = r.length; c > o; o++)
            if ("number" == typeof r[o])
                t += n($[0].charAt(r[o]));
            else
                for (var i = 0, f = r[o].length; f > i; i++)
                    t += n($[0].charAt(r[o][i].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1wovBxyLkG9N58]JORbZWKtVeXMj}:6nIUm<4HE{30FQ'&#/zD7;@|C^,)-a(+ST?%AY濃派掋杆P>"]));
;!function($) {
    !function($, n, i, t, c, r, o, e, u, f, d, E, v, s, C, G, A, h, b, l, p, B, K, L, k, m, J, _, X, O, y, I, g, w, H, T, N, D, Q, F, R, S, x, U, W, P, q, z, V, Y, M, Z, j, $n, nn, tn, cn, rn, on, en, an, un, fn, dn, En, vn, sn, Cn, Gn, An, hn, bn, ln, pn, Bn, Kn, Ln, kn, mn, Jn, _n, Xn, On, yn, In, gn, wn, Hn, Tn, Nn, Dn, Qn, Fn, Rn, Sn, xn, Un, Wn, Pn, qn, zn, Vn, Yn, Mn, Zn, jn, $i, ni, ii, ti, ci, ri, oi, ei, ai, ui, fi, di, Ei, vi, si, Ci, Gi, Ai, hi, bi, li, pi, Bi, Ki, Li, ki, mi, Ji, _i, Xi, Oi, yi, Ii, gi, wi, Hi, Ti, Ni, Di, Qi, Fi, Ri, Si, xi, Ui, Wi, Pi, qi, zi, Vi, Yi, Mi, Zi, ji, $t, nt, it, tt, ct, rt, ot, et, at, ut, ft, dt, Et, vt, st, Ct, Gt, At, ht, bt, lt, pt, Bt, Kt, Lt, kt, mt, Jt, _t, Xt, Ot, yt, It, gt, wt, Ht, Tt, Nt, Dt, Qt, Ft, Rt, St, xt, Ut, Wt, Pt, qt, zt, Vt, Yt, Mt, Zt, jt, $c, nc, ic, tc, cc, rc, oc, ec, ac, uc, fc, dc, Ec, vc, sc, Cc, Gc, Ac, hc, bc, lc, pc, Bc, Kc, Lc, kc, mc, Jc, _c, Xc, Oc, yc, Ic, gc, wc, Hc, Tc, Nc, Dc, Qc, Fc, Rc, Sc, xc, Uc, Wc, Pc, qc, zc, Vc, Yc, Mc, Zc, jc, $r, nr, ir, tr, cr, rr, or, er, ar, ur, fr, dr, Er, vr, sr, Cr, Gr, Ar, hr, br, lr, pr, Br, Kr, Lr, kr, mr, Jr, _r, Xr, Or, yr, Ir, gr, wr, Hr, Tr, Nr, Dr, Qr, Fr, Rr, Sr, xr, Ur, Wr, Pr, qr, zr, Vr, Yr, Mr, Zr, jr, $o, no, io, to, co, ro, oo, eo, ao, uo, fo, Eo, vo, so, Co, Go, Ao, ho, bo, lo, po, Bo, Ko, Lo, ko, mo, Jo, _o, Xo, Oo, yo, Io, go, wo, Ho, To, No, Do, Qo, Fo, Ro, So, xo, Uo, Wo, Po, qo, zo, Vo, Yo, Mo, Zo, jo, $e, ne, ie, te, ce, re, oe, ee, ae, ue, fe, de, Ee, ve, se, Ce, Ge, Ae, he, be, le, pe, Be) {
        $[i](t, [], function(n) {
            var i = function() {
                var n = $[r][c] + o;
                return e == $[r][u] && f == $[r][E][d] && (n = $[r][c] + v + $[r][s] + C + $[r][G]),
                n
            };
            $[h]($[b])[A](function() {
                $[p][l] = function() {
                    return $[h](K)[B] > L ? $[m][k] + J : void L
                }
            });
            var t = L
              , Ke = L;
            return _ == $[r][X] || O == $[r][X] ? ($[m][y] = I,
            $[m][g] = w,
            $[m][H] = T) : ($[m][y] = N,
            $[m][g] = D,
            $[m][H] = Q),
            {
                serverDwonload: function(n, i) {
                    if (!$[R][F](S))
                        return !x;
                    var t = $[h](U)
                      , o = t[W](P);
                    if (t[W](z)[q](V),
                    !n)
                        return void $[M][Y]($[m][Z], !x);
                    if (e == $[r][u])
                        return void $[M][Y]($[m][j], !x);
                    $n != n[nn](L, tn) && cn != n[nn](L, rn) && (n = on + n);
                    var f = $[en]()
                      , d = an + f + un + n + fn + $[R][dn](n) + En + $[m][vn] + sn;
                    o[W](Cn)[B] > L ? $[h](d)[Gn](o[W](An)) : o[hn](d);
                    var E, v, s, C = L, G = $[h](bn + f), A = $[h](bn + f + Bn)[pn]($[m][Kn])[ln](Ln), b = $[h](mn)[kn](bn + f)[W](Jn);
                    $[h](bn + f + Xn)[_n](On, function() {
                        $[yn](E),
                        E = !x,
                        $[In](v),
                        v = !x,
                        $[h][gn]($[r][c] + wn + f),
                        $[h](this)[Tn]()[Tn]()[Hn](function() {
                            $[h](this)[Nn](),
                            $[Qn][Dn]()
                        })
                    });
                    var l, p = function(n) {
                        $[In](l),
                        l = !x,
                        l = $[Fn](function() {
                            $[Qn][Rn](function() {
                                $[Qn][xn][Sn](n)
                            })
                        }, Un)
                    }, K = function() {
                        $[h][Wn]({
                            url: $[r][c] + Pn + i + qn + $[zn](n) + Vn + f + Yn + $[Mn](),
                            dataType: Zn,
                            error: function(n, i, t) {
                                var c = G[jn]($i);
                                return Un != a[ni] && c && c[ii] ? void $[Fn](function() {
                                    K()
                                }, ti) : ($[R][ci](n, i, t),
                                void (Un == a[ni] && ($[yn](E),
                                E = !x,
                                $[In](v),
                                v = !x,
                                b[Tn]()[Nn](),
                                A[ri](Ln)[ln](oi)[pn]($[m][ei]))))
                            },
                            success: function(n) {
                                return L == n[ai] && ui == n[jn] ? void $[Fn](function() {
                                    K()
                                }, ti) : (n[ai] ? (p(n[fi]),
                                A[ri](Ln)[pn]($[m][di]),
                                $[h](bn + f + Ei)[pn]($[R][dn](n[fi])),
                                $[h](bn + f + Ei)[vi](si, n[fi]),
                                A[Tn]()[Tn]()[ln](Ci)) : (A[ri](Ln)[ln](oi)[pn](n[jn]),
                                A[Tn]()[Tn]()[ln](oi)),
                                $[yn](E),
                                E = !x,
                                $[In](v),
                                v = !x,
                                void b[Tn]()[Nn]())
                            }
                        })
                    };
                    K();
                    var k = function() {
                        $[h][Wn]({
                            url: $[r][c] + Gi + f,
                            dataType: Zn,
                            success: function(n) {
                                var i = V
                                  , t = n[jn];
                                if (E) {
                                    if (!n[ai])
                                        return void A[pn]($[m][Ai]);
                                    if (t) {
                                        if (t[hi] = $[bi](t[hi]),
                                        t[Mn] = $[bi](t[Mn]),
                                        s) {
                                            var c = t[hi] - s[hi]
                                              , r = c / (t[Mn] - s[Mn]);
                                            if (C > li * r) {
                                                var o = C;
                                                C = r,
                                                r = o
                                            } else
                                                C = r;
                                            var e = $[Bi][pi](r);
                                            e = e ? e : L,
                                            i = e + Ki
                                        }
                                        if (G[jn]($i, t),
                                        L == t[B])
                                            G[W](Jn)[Li](ki, mi),
                                            A[pn](i),
                                            G[W](Ji)[pn]($[Bi][pi](t[hi]));
                                        else {
                                            var a = t[hi] / t[B] * _i;
                                            G[W](Jn)[Li](ki, a + Xi),
                                            A[pn](a[Oi](x) + yi + i + Ii),
                                            G[W](Ji)[pn]($[Bi][pi](t[B]))
                                        }
                                        G[W](gi)[pn](t[wi]),
                                        s = t
                                    }
                                }
                            }
                        })
                    };
                    v = $[Fn](function() {
                        k(),
                        E = $[Hi](function() {
                            k()
                        }, ti)
                    }, _i)
                },
                upload: function() {
                    $[h](Ni)[Ti]();
                    var n = i();
                    if ($[Qi][Di](Fi, n),
                    $[Qi][Di](Ri, Si),
                    L != $[h](Ni)[B])
                        return void $[h][Wi][Ui][Pi][xi](!L);
                    var t = $[zi][qi]($[Vi]);
                    $[h][Wi]({
                        padding: Yi,
                        width: Mi,
                        height: Zi,
                        disableTab: !L,
                        resize: !L,
                        ico: $[R][ji]($t),
                        id: Pi,
                        fixed: !L,
                        title: $[m][nt],
                        content: t({
                            LNG: $[m]
                        })
                    }),
                    $[h](Ni)[W](tt)[it](),
                    $[h](ct)[_n](On, function(n) {
                        $[h](rt)[On]();
                        var i = $[h][Wi][Ui][Pi];
                        i && i[xi](!x),
                        $[ot](n)
                    }),
                    $[h](at)[et](On)[_n](On, function() {
                        $[h](this)[ut](ft) ? ($[h](dt)[ln](Et),
                        $[h](vt)[ri](Et),
                        $[h](st)[ri](Ct),
                        $[h](Gt)[ln](Ct)) : ($[h](dt)[ri](Et),
                        $[h](vt)[ln](Et),
                        $[h](st)[ln](Ct),
                        $[h](Gt)[ri](Ct))
                    }),
                    $[h](ht)[At](function() {
                        $[R][bt]($[h](lt)[q](), $[r][pt])
                    }),
                    $[h](Bt)[et](On)[_n](On, function() {
                        $[R][bt]($[h](lt)[q](), $[r][pt])
                    }),
                    $[h](Kt)[et](On)[_n](On, function() {
                        $[h][Wi]({
                            id: Lt,
                            fixed: !L,
                            resize: !x,
                            ico: $[R][ji]($t),
                            width: kt,
                            height: mt,
                            padding: Jt,
                            title: $[m][_t],
                            content: Xt,
                            ok: function() {
                                for (var n = $[h](yt)[q]()[Ot](It), i = L; i < n[B]; i++)
                                    $[R][bt](n[i], $[r][pt])
                            }
                        })
                    }),
                    $[Qi][gt]({
                        id: wt
                    }),
                    $[Qi][gt]({
                        id: Ht
                    }),
                    $[h][Nt][Tt] && !$[h][Dt]() && $[h](Ft)[Qt](Rt),
                    $[h][St]() && ($[h](xt)[ri](Ct),
                    $[h](Ut)[et](On)[_n](On, function() {
                        $[h](Wt)[vi](Pt, V)[vi](qt, V),
                        $[h](zt)[On]()
                    }))
                },
                init: function() {
                    var c = function(n, i) {
                        var t = new $[Vt];
                        t[Yt](n),
                        t[Mt] = function() {
                            var n = new $[Zt](t[jt]);
                            i(n)
                        }
                    }
                      , o = function(n, i) {
                        n[$c] = n[nc] || n[ic] || n[$c];
                        var t = tc
                          , r = n;
                        if (n[hi] >= t) {
                            var o = n[$c](L, t)
                              , e = n[$c]((n[hi] - t) / cc, (n[hi] + t) / cc)
                              , a = n[$c](n[hi] - t, n[hi]);
                            r = new $[rc]([o, e, a])
                        }
                        c(r, function(t) {
                            for (var c = n[hi] + V, r = L; r < t[B]; r++)
                                c = c + oc + t[r];
                            var o = $[ec](c);
                            i(o)
                        })
                    }
                      , a = function(n) {
                        var t = $[h][ac]();
                        return $[r][fc][uc] && !$[h][dc]() && $[h][Ec]() && vc != this[Cc][sc] ? x == n[Gc] ? void t[Ac]() : n[bc][hc] && !n[bc][hc][lc + n[pc]] ? void t[Ac]() : (o(n[Kc][Bc], function(c) {
                            if (L == n[pc])
                                $[h][Wn]({
                                    url: i(),
                                    dataType: Zn,
                                    data: {
                                        upload_to: n[bc][Lc],
                                        name: n[bc][wi],
                                        check_md5: c,
                                        chunk: n[pc],
                                        chunks: n[Gc]
                                    },
                                    error: function() {
                                        t[Ac]()
                                    },
                                    success: function($) {
                                        $[ai] ? (t[kc](),
                                        n[bc][hc] = $[fi]) : t[Ac]()
                                    }
                                });
                            else {
                                var r = n[bc][hc];
                                if (r && r[lc + n[pc]] == c) {
                                    var o = n[mc] / n[Jc];
                                    $[Qi][_c](Xc, n[bc], o),
                                    t[kc]()
                                } else
                                    t[Ac]()
                            }
                        }),
                        t[Oc]()) : void t[Ac]()
                    };
                    $[gc][Ic][yc]({
                        "before-send": hc
                    }, {
                        checkChunk: a
                    }),
                    $[p][wc] = $[gc][Hc],
                    $[Fn](function() {
                        if (!$[p][Tc] || Nc == typeof $[Dc]) {
                            var i = Qc + $[Fc]();
                            n[Rc](i, function(n) {
                                $[p][Tc] = !L;
                                try {
                                    n[Sc](xc)
                                } catch (i) {}
                            })
                        }
                    }, ti * $[Uc](Jt, Wc));
                    var f = $[p][wc];
                    $[p][Qi] = f({
                        swf: $[r][Pc] + qc,
                        dnd: zc,
                        threads: $[r][fc][Vc],
                        sendAsBinary: $[r][fc][Yc],
                        chunkSize: $[r][fc][Mc],
                        chunked: !L,
                        timeout: Zc,
                        compress: !x,
                        resize: !x,
                        prepareNextFile: !L,
                        duplicate: !L,
                        chunkRetry: jc
                    }),
                    $[h](ir)[nr](On)[$r](On, function() {
                        var n = $[h](this)[W](tr)[vi](cr);
                        n && ($[R][rr](or) ? $[Qn][xn][Ui]($[R][er](n), Y, function() {
                            $[Qn][xn][Sn](n)
                        }) : $[R][or]($[R][er](n)))
                    }),
                    $[h](ar)[nr](On)[$r](On, function(n) {
                        var i = $[h](this)[Tn]()[W](tr)[vi](cr);
                        $[fr][ur](i),
                        $[ot](n)
                    }),
                    $[h](rt)[nr](On)[$r](On, function() {
                        $[h](dr)[Nn](),
                        Ke = L,
                        t = $[h](Er)[B],
                        E()
                    }),
                    $[h](vr)[nr](On)[$r](On, function() {
                        $[h][sr]($[Qi][Cr](), function(n, i) {
                            $[Qi][Gr](i),
                            $[Qi][Ar](i)
                        }),
                        $[h](Er)[sr](function() {
                            $[h](this)[Nn]()
                        }),
                        $[Qi][hr](),
                        Ke = L,
                        t = L,
                        E()
                    }),
                    $[h](br)[nr](On)[$r](On, function() {
                        var n = $[h](this)[lr](Cn)
                          , i = n[jn](bc);
                        n[ri](oi)[W](pr)[ri](oi),
                        n[W](Br)[Ti](),
                        n[vc](),
                        i && $[Qi][Kr](i)
                    }),
                    $[h](Lr)[nr](On)[$r](On, function(n) {
                        var i = $[h](this)[Tn]()[Tn]()
                          , c = i[jn](bc);
                        c && ($[Qi][Gr](c),
                        $[Qi][Ar](c, !L),
                        t -= x,
                        E()),
                        i[Hn](function() {
                            $[h](this)[Nn]()
                        }),
                        $[ot](n)
                    });
                    var d, E = function() {
                        $[h](kr)[pn]($[m][mr] + Jr + Ke + _r + t),
                        $[Xr][hr]()
                    }, v = Or, s = L, C = function(n, i) {
                        if ($[Fc]() - s <= yr)
                            return v;
                        s = $[Fc]();
                        var t = n[hi] * i
                          , c = Yi;
                        Nc == typeof n[Ir] ? n[Ir] = [[$[Fc]() - gr, L], [$[Fc](), t]] : n[Ir][B] <= c ? n[Ir][wr]([$[Fc](), t]) : (n[Ir] = n[Ir][$c](x, c),
                        n[Ir][wr]([$[Fc](), t]));
                        var r = n[Ir][n[Ir][B] - x]
                          , o = n[Ir][L]
                          , e = (r[x] - o[x]) / (r[L] - o[L]);
                        L >= e && (e = L);
                        var a = $[Bi][pi](e);
                        return a = a ? a : L,
                        e = a + Ki,
                        v = e,
                        e
                    }, G = [], A = function(n) {
                        $[In](d),
                        d = !x,
                        d = $[Fn](function() {
                            var i = G;
                            $[Qn][Rn](function() {
                                if ($[Qn][xn][Sn](i),
                                n && (G = [],
                                $[R][rr](or))) {
                                    if (e == $[r][u])
                                        return;
                                    $[Qn][Tr][Hr]($[r][pt])
                                }
                            })
                        }, Nr)
                    }, b = L, l = Dr, K = [];
                    $[Qi][Qr](Fr, function(n) {
                        return b++,
                        b >= l ? (b == l && ($[Fn](function() {
                            $[h][Sr][Rr]($[m][xr] + Ur + $[m][H])
                        }, Wr),
                        $[Qi][Pr]()),
                        !x) : void K[wr](n[qr])
                    })[Qr](zr, function() {
                        if (b >= l)
                            for (var n = L; n < K[B]; n++)
                                $[h](bn + K[n] + Xn)[On]();
                        b = L,
                        K = []
                    })[Qr](Vr, function(n) {
                        if ($[h](Ni)[Ti](),
                        !$[R][F]())
                            return $[Qi][Gr](n),
                            void $[Qi][Ar](n);
                        var i;
                        try {
                            i = n[Bc][Bc][Yr],
                            void L != n[Bc][Bc][Mr] && V != n[Bc][Bc][Mr] && (i = n[Bc][Bc][Mr])
                        } catch (c) {}
                        if (n[Yr] = i,
                        n[Bc] && n[Bc][Bc] && x == n[Bc][Bc][Zr] && n[Bc][Bc][Yr])
                            return $[Qn][xn][$o][jr]($[r][pt] + n[Yr]),
                            $[Qi][Gr](n),
                            void $[Qi][Ar](n);
                        var o = n[Yr];
                        n[no] = !x,
                        n[Lc] = $[r][pt],
                        (void L == o || Nc == o) && (o = n[wi]),
                        t++;
                        var e = $[h](io)
                          , a = an + n[qr] + to + $[co](n[Lc] + o) + ro + $[co](n[Lc] + o) + fn + $[co]($[R][dn](o)) + oo + $[Bi][pi](n[hi]) + eo + $[m][y] + ao + $[m][vn] + sn
                          , u = function() {
                            L == n[hi] && o && ($[Qn][xn][$o][uo](n[Lc] + o),
                            $[Qi][Gr](n),
                            Ke++,
                            _(n, $[m][mr], n[Lc] + o),
                            E())
                        }
                          , f = function() {
                            $[Qi][$t](),
                            $[Fn](function() {
                                u()
                            }, Un)
                        };
                        L == e[B] ? $[Fn](function() {
                            $[h](io)[fo](a),
                            f()
                        }, Un) : (e[fo](a),
                        f())
                    })[Qr](Eo, function(n, i, t) {
                        if (n[bc] && !$[R][vo](n[bc][hi])) {
                            var c = n[bc];
                            return $[Qi][Gr](c),
                            $[Qi][Ar](c),
                            void X(c, $[m][so])
                        }
                        $[h](bn + n[bc][qr])[jn](bc, n[bc]);
                        var r = $[zn](n[bc][Yr]);
                        (void L == r || Nc == r) && (r = V),
                        i[Yr] = r,
                        i[Lc] = n[bc][Lc],
                        t[Co] = $[Go][gn](Co)
                    })[Qr](Xc, function(n, i) {
                        var c = C(n, i)
                          , r = (_i * i)[Oi](x) + Xi
                          , o = Ao == r ? $[m][ho] : r + bo + c + Ii;
                        $[h](kr)[pn]($[m][k] + Jr + Ke + _r + t + lo + v + Ii),
                        $[Xr][po](Ke + _r + t + bo + o + oc + v + Ii);
                        var e = $[h](bn + n[qr])
                          , a = e[W](Bo);
                        a[B] || (a = $[h](Ko)[kn](e)[W](Jn)),
                        e[W](pr)[pn](o),
                        a[Li](ki, r),
                        n[Lo] && n[Lo][fi] && (n[ko] = n[Lo])
                    })[Qr](mo, function($, n) {
                        if ($[bc][Lo] = n,
                        !n[ai])
                            return $[Jo] = !L,
                            !x;
                        try {
                            $[bc][Yr] || G[wr](n[fi])
                        } catch (i) {}
                    })[Qr](_o, function(n) {
                        var i = n[ko] || n[Lo] || {};
                        if (i && i[jn])
                            if (i[ai] && i[fi])
                                Ke++,
                                _(n, $[m][i[jn]], i[fi]);
                            else {
                                var t = $[m][Xo] + $[m][g] + Oo + i[jn] + yo;
                                X(n, t)
                            }
                    })[Qr](Io, function(n, i) {
                        var t = n[ko] || n[Lo] || {};
                        if (t[fi])
                            return void _(n, $[m][t[jn]], t[fi]);
                        var c = go == typeof t ? t[jn] || t[wo] || V : t;
                        if (c += V,
                        c && -x != c[Ho](To))
                            return $[h][sr]($[Qi][Cr](), function(n, i) {
                                $[Qi][Gr](i),
                                $[Qi][Ar](i)
                            }),
                            void $[M][Y](No, !x);
                        var r = cc;
                        if (n[Do] || (n[Do] = L),
                        n[hi] < Qo && n[Do] <= r)
                            return void $[Fn](function() {
                                $[Qi][Kr](n),
                                n[Do]++
                            }, Fo);
                        var o = $[m][Xo] + bo + i + Ii;
                        cn == i && (o = $[m][Ro]),
                        X(n, o)
                    })[Qr](So, function() {
                        E(),
                        A(!L),
                        t == Ke && ($[Qi][hr](),
                        $[h](rt)[On](),
                        $[h][Wi][Ui][Pi][xi](!x))
                    })[Qr](oi, function(n) {
                        $[M][Y](n, !x)
                    });
                    var J, _ = function(n, i, t) {
                        var c = $[h](bn + n[qr])
                          , r = _r + $[xo]($[co](t), _r);
                        if (i = $[co](i),
                        !c[Uo]()) {
                            var o = Wo * c[Po](Cn);
                            $[h](zo)[qo](o)
                        }
                        c[ri](oi)[ln](Ci)[W](pr)[ri](oi)[ri](Vo)[pn](i),
                        c[W](Yo)[ln](Mo)[ln](ur)[ri](Zo)[ri](Nn),
                        c[W]($e)[jo]($[R][dn](r))[vi](si, r)[vi](cr, r),
                        c[W](Br)[ne](),
                        $[Qi][Ar](n),
                        n[Yr] || A(!x)
                    }, X = function(n, i) {
                        var t = $[h](bn + n[qr]);
                        i = $[co](i),
                        t[ln](oi)[W](pr)[ri](Vo)[ln](oi)[jo](i)[vi](si, i),
                        t[W](Br)[ne]()
                    };
                    $[ie] = !x,
                    $[te] = function() {
                        if (L == $[ie]) {
                            if ($[ie] = !L,
                            !$[R][F](void L, !x))
                                return;
                            var n = ce + $[m][re] + oe;
                            $[ee][Y](n),
                            $[h](ae)[Li]({
                                background: ue,
                                opacity: fe
                            })
                        }
                        J && $[p][In](J)
                    }
                    ,
                    $[de] = function(n) {
                        $[ot](n),
                        J && $[p][In](J),
                        J = $[p][Fn](function() {
                            $[ie] = !x,
                            $[ee][Ee]()
                        }, _i)
                    }
                    ,
                    $[ve] = function(n) {
                        try {
                            if (n = n[se] || n,
                            $[R][F]())
                                if (n[Ge][Ce][B] > L && n[Ge][Ce][L][wi])
                                    $[R][$t](),
                                    $[R][Ae](he);
                                else {
                                    var i = n[Ge][be](le);
                                    i && cn == i[pe](L, rn) && $[Qn][xn][$o][Be](i)
                                }
                            $[ot](n)
                        } catch (n) {}
                        $[ie] && ($[ie] = !x,
                        $[ee][Ee]())
                    }
                }
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,--,'*+,.$/0)1,(#"), $("())2,34"), $("5"), $("$6)1,.$.*%&1$7)1,(#"), $("38(.$"), $("38(.$9(:$"), $(";"), $("+('7)1,(#"), $("38(.$<'%,"), $("38(.$*%&1$7)1,(#=03$.>"), $("03$."), $("=3&#>"), $("3&#"), $(".$(#?"), $("@"), $("#,+0-$'4"), $(",'A$%,.$0'1,(#"), $("B&'#,B"), $("1$':48"), $("/0)1,(#C1,(#&':D/#,B'1,(#C1,(#&':"), 0, $("0)1,(#&':"), $("EF5"), $("///"), $("G8"), $("1(':"), $("G8CHF"), $("0)1,(#I.$4.?"), $("JK"), $("0)1,(#I-$.:$I$..,."), $("LMNOPQ"), $("0)1,(#I%&1$I4,,I-,.$"), $("LRSTUVWXXXQ"), $("Y$4.?"), $("LZ$.:$[%&1$[$..,.\\Q"), $("LF,4[-,.$[48('[WXXX[%&1$3Q"), $("0)1,(#H8$+]"), $("+,.$"), $("$6)1,.$./3$.^$._,B'1,(#"), 1, $("/#,B'1,(#CA,6"), $("%&'#"), $("/#,B'1,(#C1&34"), $("^(1"), $("&')04"), "", $("4&)3"), $("`&)3"), $("38(.$I$..,.I)(.(-"), $("',I)$.-&33&,'I(+4&,'"), $("%4)"), $("30A34."), 3, $("844)"), 4, $("844)a**"), $("77<_"), $("b#&^[&#>c"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4?41$>c"), $("cd"), $(")(48`8&3"), $("b*3)('db3)('[+1(33>c3&G$cdXAb*3)('db3)('[+1(33>c34(4$cd"), $("0)1,(#I.$(#?"), $("b*3)('db([+1(33>c.$-,^$[%,'4C&+,'[&+,'C.$-,^$c[8.$%>ce(^(3+.&)4a^,&#LXQcdb*(db#&^[34?1$>c+1$(.aA,48cdb*#&^db*#&^db*#&^d"), $("/&4$-"), $("&'3$.4f$%,.$"), $("/&4$-a$gLXQ"), $("())$'#"), $("h"), $("(##H1(33"), $("4$64"), $("[/34(4$"), $("#,B'1,(#I.$(#?"), $("#,B'1,(#C1,(#&':"), $("())$'#`,"), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xij4$64C(1&:'a.&:84jcdb*#&^db*#&^d"), $("/).,:.$33CA(."), $("A&'#"), $("[/.$-,^$"), $("+1&+]"), $("+1$(.<'4$.^(1"), $("+1$(.`&-$,04"), $(":$4"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>.$-,^$=00&#>"), $("31&#$7)"), $(")(.$'4"), $(".$-,^$"), $("%k"), $("0&"), $("3$4`&-$,04"), $("%kH(11A(+]"), $("3$4l$1$+4f?m&1$'(-$"), $(")(48"), 200, $("(e(6"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>#,B'1,(#=3(^$9(48>"), $("=0.1>"), $("0.1n'+,#$"), $("=00&#>"), $("=4&-$>"), $("4&-$"), $("e3,'"), $("#(4("), $(").,:+$33"), $("34(403"), $("30)),.4Y(':$"), 1e3, $("(e(6n..,."), $(".$-,^$H1(33"), $("$..,."), $("#,B'1,(#I$..,."), $("+,#$"), $("#,B'1,(#&':"), $("&'%,"), $("#,B'1,(#I30++$33"), $("[/&'%,[/4&41$"), $("(44."), $("4&41$"), $("30++$33"), $("$6)1,.$.*3$.^$._,B'1,(#=4?)$>)$.+$'4=00&#>"), $("1,(#&':"), $("3&G$"), $(")(.3$m1,(4"), .2, $("%&1$l&G$"), $(")(48`,,13"), $("*3"), $("+33"), $("B&#48"), $(";XXi"), $("/3&G$"), 100, $("i"), $("4,m&6$#"), $("iL"), $("Q"), $("/4&41$"), $("'(-$"), $("3$4<'4$.^(1"), $("38,B"), $("/#&(1,:C%&1$C0)1,(#"), $(",)4&,'"), $("0)1,(#$."), $("3$.^$."), $("-$48,#"), $("9ol`"), $("#&3)1(?"), $("1&34"), $("#&(1,:"), $("#&(1,:C%&1$C0)1,(#"), $("+,-)&1$"), $("4$-)1(4$"), $("4)17)1,(#"), 5, 430, 450, $("&+,'"), $("0)1,(#"), $("0)1,(#I-04&"), $("8&#$"), $("/(0&C-(6D/(0&C-&'"), $("/#&(1,:C%&1$C0)1,(#[/(0&C+1,3$"), $("/0)1,(#CA,6C+1$(."), $("34,)99"), $("0'A&'#"), $("/%&1$C0)1,(#CA,6[/4,)A(.C'(^[(/-$'0"), $("8(3H1(33"), $("4(AC0)1,(#"), $("/%&1$C0)1,(#CA,6[/4(AC0)1,(#"), $("48&3"), $("/%&1$C0)1,(#CA,6[/4(AC#,B'1,(#"), $("/%&1$C0)1,(#CA,6[/0)1,(#CA,6"), $("8&##$'"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6"), $("]$?n'4$."), $("/#,B'1,(#CA,6[p'(-$>0.1q"), $("3$.^$._B,'1,(#"), $("/#,B'1,(#CA,6[&')04"), $("48&39(48"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4"), $("/%&1$C0)1,(#CA,6[/#,B'1,(#CA,6[/#,B'1,(#C34(.4C(11"), $("3$.^$.C#B,'1,(#C4$64(.$("), $("rWX)6"), $("WsX)6"), 10, $("#,B'1,(#"), $("b4$64(.$([34?1$>tB&#48ar;X)6j8$&:84aWuX)6jtdb*4$64(.$(d"), $("3)1&4"), $("/3$.^$.C#B,'1,(#C4$64(.$([4$64(.$("), $("v"), $("(##f044,'"), $("h)&+]$."), $("h)&+]$.C%,1#$."), $("&,3"), $("A.,B3$.<l"), $("&3Z,A1$l(%(.&"), $(".$-,^$w44."), $("/B$A0)1,(#$.C$1$-$'4C&'^&3&A1$"), $("-014&)1$"), $("30)),.47)1,(#m,1#$."), $("/0)1,(#C+$.4CA,6"), $("/%&1$C0)1,(#CA,6[/#.(:C0)1,(#C%,1#$."), $("h)&+]$.C%,1#$.[&')04"), $("B$A]&4#&.$+4,.?"), $("#&.$+4,.?"), $("h)&+]$.C%,1#$.[1(A$1"), $("m&1$Y$(#$."), $(".$(#w3w..(?f0%%$."), $(",'1,(#"), $("7&'4xw..(?"), $(".$3014"), $("31&+$"), $("-,Gl1&+$"), $("B$A]&4l1&+$"), 6, 2, $("f1,A"), $("D"), $("-#k"), $("_$%$..$#"), $("0)1,(#H8$+]H80']"), $("3$44&':3"), $("&3<n"), $("30)),.4H('^(3"), $("%1(38"), $(".0'4&-$o.#$."), $(",)4&,'3"), $("+80']3"), $(".$3,1^$"), $("+8$+]H80']"), $("%&1$"), $(")(.4I"), $("+80']"), $("3,0.+$"), $("A1,A"), $("0)1,(#I4,"), $(".$e$+4"), $("$'#"), $("4,4(1"), $("4.&::$."), $("0)1,(#9.,:.$33"), $(").,-&3$"), $(".$:&34$."), $("7)1,(#$."), $("y$A7)1,(#$."), $("+,.$I0)1,(#$.I+.$(4"), $("+.$(4$"), $("(k#rxz+szXxr%#{;uAzAu"), $("0'#$%&'$#"), $("4)1_&(1,:24-1"), $("**34(4&+/],#+1,0#/+,-*0)#(4$*-(&'r/e3|^>"), $("4&-$m1,(4"), $("(3?'+"), $("4,#,"), $(";CW"), $(".,0'#m.,-`,"), 30, $("34(4&+9(48"), $("e3*1&A*B$A0)1,(#$.*7)1,(#$./3B%"), $("A,#?"), $("0)#1,(#`8.$(#3"), $("0)#1,(#f&'#(.?"), $("0)#1,(#H80']l&G$"), 18e6, 15, $("1&^$"), $("#&$"), $("/0)1,(#$.C+,'4$'4[/30++$33"), $("3)('/4&41$"), $("#(4(C'(-$"), $("&3w))"), $("$6)1,.$."), $(")(48m(48$."), $("/0)1,(#$.C+,'4$'4[/,)$'"), $(",)$'"), $("],#w))"), $("/0)1,(#$.C1&34[/&4$-/30++$33"), $("/0)1,(#$.C1&34[/&4$-"), $("/0)1,(#CA,6C+1$(.C(11"), $("$(+8"), $(":$4m&1$3"), $("3]&)m&1$"), $(".$-,^$m&1$"), $(".$3$4"), $("/0)1,(#$.C1&34[/0)1,(#C.$4.?"), $(")(.$'43"), $("/34(4$"), $("/).,:.$33"), $(".$4.?"), $("/0)1,(#$.C+,'4$'4[/.$-,^$"), $("/#&(1,:C%&1$C0)1,(#[/(0&C4&41$"), $("0)1,(#I30++$33"), $("a["), $("*"), $("`&41$"), $("Xf*3"), .3, $("3)$$#"), .5, $(")038"), $("+8$+]<%H8(':$"), $("4.$$"), 600, 2e3, $(",'"), $("A$%,.$m&1$", 90, "0$0$#"), $("(1$.4"), $("(.4_&(1,:"), $("0)1,(#I4&)3I-,.$"), $("bA.*d"), 20, $("34,)"), $("&#"), $("%&1$3", 90, "0$0$#"), $("%&1$", 90, "0$0$#"), $("%0119(48"), $("B$A]&4Y$1(4&^$9(48"), $("&3_&.$+4,.?"), $("'$Bm,1#$."), $(")(48o)$.(4$"), $("%&'&38$#"), $("/0)1,(#$.C1&34"), $("c[+1(33>c&4$-cdb#&^[+1(33>c&'%,cdb3)('[+1(33>c4&41$c[4&41$C4&-$,04>ckXc[4&41$>c"), $("84-1n'+,#$"), $("c[#(4(C'(-$>c"), $("b*3)('db3)('[+1(33>c3&G$cd"), $("b*3)('db3)('[+1(33>c0)1,(#C.$4.?cd"), $("b*3)('db3)('[+1(33>c34(4$[0)1,(#C1,(#&':c[4&41$C4&-$,04>ckXcd"), $("'$Bm&1$"), $(").$)$'#"), $("0)1,(#f$%,.$l$'#"), $("0)1,(#H8$+]l&G$"), $("3)(+$I&3I%011"), $(91, "CHlYmC`o", 92, "nF"), $("H,,]&$"), $(";XX/Xi"), $("0)1,(#&':I-,^$"), $("L"), $("[L"), $("3$4"), $("/).,:.$33[/).,:.$33CA(."), $("b#&^[+1(33>c).,:.$33[).,:.$33C34.&)$#[(+4&^$cdb#&^[+1(33>c).,:.$33CA(.c[.,1$>c).,:.$33A(.c[34?1$>cB&#48a[Xicdb*#&^db*#&^d"), $("3$.^$._(4("), $("3$.^$._(4(E(34"), $("0)1,(#w++$)4"), $("3$.^$.F$$#Y$4.?"), $("0)1,(#l0++$33"), $("0)1,(#I$..,."), $("[p"), $("q"), $("0)1,(#n..,."), $(",Ae$+4"), $("I.(B"), $("&'#$6o%"), $("b\\CC03$.[1,:&'CCd"), $("1,:&'[$..,.\\"), $("$..,.F0-"), 10485760, 1500, $("0)1,(#I$..,.I844)"), $("0)1,(#m&'&38$#"), $("14.&-"), $("&'l+.$$'"), 36, $("&'#$6"), $("3+.,11`,)"), $("/0)1,(#$.C+,'4$'4"), $("0)1,(#C1,(#&':"), $("/.$-,^$"), $("&+,'C,]"), $("&+,'C.$-,^$"), $("84-1"), $("/&'%,[/4&41$"), $("%(#$o04"), $("&'l4(4$"), $("#.(:o^$."), $("b#&^[+1(33>c0)1,(#C4&)3cd", 93, 93, 93, 93, 93, 93, "b#&^d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#;[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#Wcdb*&d", 93, 93, 93, 93, 93, 93, 93, "b&[+1(33>c&+,'C+1,0#[+1,0#z[-,^$E$%4E,,)cdb*&d", 93, 93, 93, 93, 93, 93, "b*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c+1,0#C-,^$0)cdb&[+1(33>c-,^$`,)E,,)[&+,'C+&.+1$C(..,BC0)cdb*&db*#&^d", 93, 93, 93, 93, 93, 93, "b#&^[+1(33>c-3:cd"), $("0)1,(#I#.(:I4&)3"), $("b*#&^d", 93, 93, 93, 93, 93, "b*#&^d"), $("Z(3]", 94, "&$B"), $("hB&'#,BZ(3]", 94, "&$B"), $("hrWxk%r"), $("X/x"), $("#.(:E$(^$"), $("+1,3$"), $("#.(:_.,)"), $(",.&:&'(1n^$'4"), $("%&1$3"), $("#(4(`.('3%$."), $(")1(?l,0'#"), $("#.(:I0)1,(#"), $(":$4_(4("), $("4$64*)1(&'"), $("30A34.&':"), $("())w##7YE"))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var i = arguments, t = "", c = 0, r = i.length; r > c; c++)
            if ("number" == typeof i[c])
                t += n($[0].charAt(i[c]));
            else
                for (var o = 0, e = i[c].length; e > o; o++)
                    t += n($[0].charAt(i[c][o].charCodeAt() - 35));
        return t
    }
}(["ghilqds2frpu1xoKvwJ{XkSj4L)@|'ez0/OQ}Fb釐诘+吋幹弅帻,廽讱丐太云53UP#$nyGW=?%AmEt&(>8VIHR^`7:*9\rD;Z6<BT[N\fY"]));
;define("app/common/core.api", [], function(a, b) {
    var c = "FileSelectApi"
      , d = function() {
        var a = $.parseUrl();
        if (a.params.fileSelect) {
            $.addStyle(".file .item-select{display:none !important;}");
            var b = a.params.fileSelect
              , d = parseInt(a.params.fileSelectSingle)
              , e = a.params.fileSelectAllow;
            kodReady.push(function() {
                Hook.bind("explorer.fileSelect.change", function() {
                    Hook.fileSelectChangeApi || k()
                }),
                k()
            });
            var f = function(a, b) {
                var c = {
                    type: a,
                    data: b
                };
                i.send(jsonEncode(c))
            }
              , g = function(a) {
                var b = jsonDecode(a);
                if (!b || !b.type)
                    return void console.error("parse error!" + a);
                var c = b.type
                  , e = b.data;
                if ("makeUrl" == c) {
                    $.isArray(e) || (e = [e]);
                    var g = {};
                    Tips.loading(LNG.loading);
                    for (var h = function(a, b) {
                        var c = !0
                          , e = [];
                        for (var h in g)
                            h == b && (g[b].url = a),
                            g[h].url === !1 && (c = !1),
                            e.push(g[h]);
                        c && (Tips.close(LNG.loading),
                        d && (e = e[0]),
                        f("makeUrl", e))
                    }, i = 0; i < e.length; i++) {
                        var j = e[i];
                        g[j] = {
                            name: core.pathThis(j),
                            url: !1,
                            path: j
                        },
                        core.fileLink(j, function(a, b) {
                            h(a, b)
                        })
                    }
                }
            }
              , h = window.parent;
            if (window.MessageInit)
                i.addTarget(h, "ParentPage");
            else {
                var i = new Messenger("ChildPage",c);
                i.addTarget(h, "ParentPage"),
                i.listen(g),
                window.MessageInit = !0
            }
            var j = function(a) {
                var b = e.split("|")
                  , c = core.pathExt(a);
                return "" == e || "" != e && -1 != $.inArray(c, b) ? !0 : !1
            }
              , k = function() {
                var a = ui.fileLight.fileListSelect()
                  , c = []
                  , e = $([])
                  , f = $([])
                  , g = 0;
                "all" == b && (c = {
                    file: [],
                    folder: []
                }),
                d && "folder" == b && 0 == a.length && c.push(G.thisPath),
                a.each(function() {
                    var a = $(this)
                      , h = !1
                      , i = ui.fileLight.path(a)
                      , k = a.hasClass("folder-box")
                      , l = a.hasClass("file-box");
                    return ("file" != b && k || "folder" != b && l && j(i)) && (h = !0,
                    g += 1),
                    d && h && g > 1 ? void (e = e.add(a)) : void (h ? ("all" == b ? l ? c.file.push(i) : c.folder.push(i) : c.push(i),
                    f = f.add(a)) : e = e.add(a))
                }),
                e.length >= 1 && e.removeClass("select"),
                l(c)
            }
              , l = function(a) {
                0 == a.length || "all" == b && 0 == a.file.length && 0 == a.folder.length ? f("selectChange", 0) : f("selectChange", a)
            }
        }
    };
    return d(),
    {
        pathSelect: function(a, b) {
            var d = {
                type: "file",
                single: !0,
                allowExt: "",
                firstPath: !1,
                makeUrl: !1,
                title: LNG.path_api_select_file,
                resize: !0,
                fixed: !0,
                top: "50%",
                ico: core.icon("folder"),
                lock: !0,
                background: "#000",
                animate: !0,
                opacity: .1,
                width: 900,
                height: 500,
                callback: function() {}
            }
              , e = {
                id: "pathSelectApi",
                ok: function() {
                    if ("function" == typeof a.callback) {
                        var b = g.DOM.wrap.find(".path-select-input").data("result");
                        if (!b)
                            return void Tips.tips(LNG.error, !1);
                        if (b) {
                            var c = b;
                            if (a.single && "all" != a.type && (c = b[0]),
                            a.makeUrl && "file" == a.type)
                                return i("makeUrl", c),
                                !1;
                            a.callback(c)
                        } else
                            Tips.tips(LNG.error, !1)
                    }
                },
                cancel: !0
            };
            a = $.extend(d, a),
            "function" == typeof b && (a.callback = b),
            e = $.extend(e, a);
            var f = G.appHost + "explorer&type=iframe";
            f += "&forceWap=0&fileSelect=" + a.type,
            f += "&fileSelectSingle=" + Number(a.single),
            f += "&fileSelectAllow=" + a.allowExt,
            a.firstPath && (f += "&path=" + a.firstPath),
            $(".pathSelectApi .aui-state-highlight").addClass("disable"),
            e.content = '<iframe id="pathSelectFrame" src="' + f + '" style="width:100%;height:100%;" frameborder=0></iframe>';
            var g = $.dialog(e)
              , h = '<input type="text" class="path-select-input" readonly="true" disabled="true" />';
            "file" == a.type && (h += '<span class="label label-primary">' + a.allowExt + "</span>"),
            $(h).insertBefore($(g.DOM.wrap).find(".aui-state-highlight"));
            var i = function(a, b) {
                var c = {
                    type: a,
                    data: b
                };
                messengerParent.send(jsonEncode(c))
            }
              , j = function(b) {
                var c = jsonDecode(b);
                if (!c || !c.type)
                    return void console.error("parse error!" + b, c);
                var d = c.type
                  , e = c.data;
                if ("makeUrl" == d)
                    a.callback(e),
                    $.artDialog.list.pathSelectApi.close();
                else if ("selectChange" == d) {
                    var f = $(".pathSelectApi")
                      , g = f.find(".path-select-input")
                      , h = f.find(".aui-state-highlight");
                    if (!e)
                        return h.addClass("disable"),
                        g.data("result", !1),
                        void g.val("");
                    h.removeClass("disable");
                    var i = "";
                    if (a.single)
                        i = core.pathThis(e[0]);
                    else {
                        var j = e
                          , k = 0;
                        "all" == a.type && (j = e.folder.concat(e.file)),
                        $.each(j, function(a, b) {
                            i += '"' + core.pathThis(b) + '",  ',
                            k++
                        }),
                        i = "[" + k + "]  " + rtrim(i, ",  ")
                    }
                    g.data("result", e),
                    g.val(i)
                }
            }
              , k = $("#pathSelectFrame").get(0).contentWindow;
            window.MessagerParentInit ? messengerParent.addTarget(k, "ParentPage") : (window.messengerParent = new Messenger("ParentPage",c),
            messengerParent.addTarget(k, "ParentPage"),
            messengerParent.listen(j),
            window.MessagerParentInit = !0)
        },
        randomImage: function(a) {
            var b = G.settings.pluginServer + "wallpage/index&lang=" + G.lang + "&callback=?";
            $.getJSON(b, function(b) {
                "function" == typeof a && a(b)
            })
        }
    }
});
;define("app/common/core.playSound", [], function(a, b) {
    var c = {
        file_remove: "file_remove.mp3",
        recycle_clear: "recycle_clear.mp3",
        folder_open: "folder_open.mp3",
        window_min: "window_min.mp3",
        error: "error_tips.mp3",
        drag_upload: "drag_upload.mp3",
        drag_drop: "drag_drop.mp3"
    }
      , d = function(a) {
        var b = G.staticPath + "others/sound/" + a;
        Hook.trigger("playSound", b)
    };
    return {
        playSoundFile: d,
        playSound: function(a) {
            G && G.userConfig && "1" == G.userConfig.soundOpen && setTimeout(function() {
                d(c[a])
            }, 50)
        }
    }
});
;define("app/common/core.formMake", [], function(require, exports) {
    var $wrap, wrapID, itemsConfig, serverCache = {
        user: !1,
        group: !1,
        role: !1
    }, bindEvent = function() {
        $wrap = $("#" + wrapID),
        $wrap.find(".tab-group .tab-item").length > 1 ? bindGroupTab() : $wrap.find(".tab-group").addClass("hidden"),
        $wrap.find(".form-row.form-slider").exists() && bindSlider(),
        $wrap.find(".form-row.form-codeEditor").exists() && initCodeEditor(),
        $wrap.find(".form-row.form-dateTime").exists() && bindDateTime(),
        $wrap.find(".form-row.form-color").exists() && bindColor(),
        $wrap.find(".form-row.form-fileSelect").exists() && bindFileSelect(),
        $wrap.find(".form-row select").exists() && bindSelect(),
        $wrap.find(".form-row.form-segment").exists() && bindSegment(),
        $wrap.find(".form-row.form-userSelect").exists() && bindUserSelect(),
        $wrap.find(".form-row.form-cityPicker").exists() && bindCityPicker(),
        $wrap.find(".form-row.form-html [data-link-type]").exists() && loadLinkData(),
        $wrap.find(".form-row.error [name]").die("change").live("change", function() {
            $(this).parents(".form-row.error").removeClass("error")
        }),
        $wrap.find(".form-userSelect").die("click").live("click", function() {
            $(this).removeClass("error")
        });
        var a = [".form-segment input", ".form-radio input", ".form-checkbox input", ".form-switch input", ".form-select select"];
        $wrap.find(a.join(",")).die("change").live("change", function() {
            switchItemChange($wrap, $(this))
        }),
        $wrap.find(a.join(",")).each(function() {
            switchItemChange($wrap, $(this))
        }),
        $wrap.find(".form-button button").each(function() {
            buttonSwitchAction($wrap, $(this))
        }),
        $wrap.find(".form-button button").die("click").live("click", function() {
            $(this).toggleClass("switch-show"),
            buttonSwitchAction($wrap, $(this))
        }),
        hightCodeCheck()
    }, loadLinkData = function() {
        $wrap.find(".form-html [data-link-type]").each(function() {
            var a = $(this).attr("data-link-type")
              , b = $(this).attr("data-link-url")
              , c = $(this);
            switch (a) {
            case "html":
            case "code":
                $.get(b, function(b) {
                    "code" == a ? c.html("<pre>" + htmlEncode(b) + "</pre>") : c.html(b),
                    hightCodeCheck()
                });
                break;
            case "javascript":
                require.async(b);
                break;
            case "style":
                seajs.use(b)
            }
        })
    }, hightCodeCheck = function() {
        $wrap.find("pre,code").exists() && require.async("lib/markdown/highlight.min", function() {
            $wrap.find("pre,code").each(function(a, b) {
                $(this).hasClass("ace_editor") || $(this).hasClass("hljs") || hljs.highlightBlock(b)
            })
        })
    }, buttonSwitchAction = function(a, b) {
        var c = b.attr("data-switchItem");
        c && (c = c.split(","),
        b.hasClass("switch-show") ? $(c).each(function(b, c) {
            a.find("[data-key='" + c + "']").show()
        }) : $(c).each(function(b, c) {
            a.find("[data-key='" + c + "']").hide()
        }))
    }, switchItemChange = function(a, b) {
        var c = b.parents(".form-row");
        if (1 == c.find(".switch-info").length) {
            var d = b.val()
              , e = c.attr("data-type")
              , f = c.find(".switch-info").attr("data-value");
            f = jsonDecode(f),
            "switch" == e ? d = b.prop("checked") + 0 + "" : "checkbox" == e && (d = [],
            c.find("input").filter(":checked").each(function() {
                d.push($(this).val())
            }),
            d = d.join(","));
            for (var g = f.include && f.include.split(","), h = (f[d] || "") && f[d].split(","), i = 0; i < g.length; i++)
                g[i] = trim(g[i]);
            for (var i = 0; i < h.length; i++)
                h[i] = trim(h[i]);
            if ("string" == typeof h && (h = []),
            "checkbox" == e && d && !f[d])
                for (var j = d.split(","), i = 0; i < j.length; i++) {
                    var k = f[j[i]];
                    k && (h = h.concat(k.split(",")))
                }
            a.find(".form-row").each(function() {
                var a = $(this)
                  , b = a.attr("data-key") || "";
                inArray(g, b) && (a.hide(),
                inArray(h, b) && a.show())
            })
        }
    }, bindGroupTab = function() {
        var a = $wrap.find(".tab-content .tab-pane")
          , b = $wrap.find(".tab-group .tab-item");
        a.each(function() {
            var c = $(this).attr("id")
              , d = $wrap.find("." + c);
            d.length > 0 ? d.appendTo($(this)) : (a.filter("#" + c).remove(),
            b.find('[data-id="' + c + '"]').parent().remove())
        }),
        b.click(function() {
            b.removeClass("active"),
            $(this).addClass("active");
            var c = $(this).find("a").attr("data-id");
            a.removeClass("active"),
            a.filter("#" + c).addClass("active")
        })
    }, bindSlider = function() {
        seajs.use("lib/bootstrap-slider/bootstrap-slider.css"),
        require.async("lib/bootstrap-slider/bootstrap-slider.js", function() {
            $wrap.find(".form-slider input").slider()
        })
    }, bindDateTime = function() {
        $wrap.find(".form-dateTime input + .btn").bind("click", function() {
            $(this).prev().focus()
        }),
        require.async(["lib/jquery.datetimepicker/jquery.datetimepicker.css", "lib/jquery.datetimepicker/jquery.datetimepicker.js"], function() {
            var theLang = "zh-CN" == G.lang || "zh-TW" == G.lang ? "ch" : "en";
            $wrap.find(".form-dateTime input").each(function() {
                var format = $(this).attr("data-format")
                  , fromTime = $(this).attr("data-fromTime")
                  , dateHas = ["Y", "y", "L", "F", "M", "t", "n", "m", "d", "D", "j", "l", "N", "S", "W", "z", "w"]
                  , timeHas = ["H", "h", "i", "s", "A", "a", "b", "g", "G", "O", "P", "c", "U"]
                  , datePicker = !1
                  , timePicker = !1;
                format || (format = "Y/m/d");
                for (var i = 0; i < dateHas.length; i++)
                    if (-1 !== format.indexOf(dateHas[i])) {
                        datePicker = !0;
                        break
                    }
                for (var i = 0; i < timeHas.length; i++)
                    if (-1 !== format.indexOf(timeHas[i])) {
                        timePicker = !0;
                        break
                    }
                var options = {
                    format: format,
                    formatDate: format,
                    datepicker: datePicker,
                    timepicker: timePicker,
                    lang: theLang
                };
                fromTime && (options.minDate = fromTime.match(/[a-zA-z()]/) ? eval(fromTime) : fromTime),
                $(this).datetimepicker(options).blur(function() {
                    $(this).trigger("change")
                })
            })
        })
    }, bindColor = function() {
        $wrap.find(".form-color input + .btn").unbind("click").bind("click", function() {
            $(this).prev().click()
        }),
        seajs.use("lib/colorpicker/css/colorpicker.css"),
        require.async("lib/colorpicker/js/colorpicker", function() {
            $wrap.find(".form-color input").ColorPicker({
                onBeforeShow: function(a) {
                    $(a).attr("input-name", $(this).attr("name")),
                    $(this).ColorPickerSetColor(this.value)
                },
                onShow: function(a) {
                    return $(a).fadeIn(100),
                    !1
                },
                onHide: function(a) {
                    return $(a).fadeOut(100),
                    !1
                },
                onChange: function(a, b, c, d, e) {
                    var f = $($(this).data("colorpicker").el);
                    f.val("#" + b).trigger("change"),
                    f.parent().find(".btn i").css("background", f.val())
                }
            }).bind("keyup", function() {
                $(this).ColorPickerSetColor(this.value),
                $(this).parent().find(".btn i").css("background", $(this).val())
            })
        })
    }, bindFileSelect = function() {
        $wrap.find(".path-select").die("click").live("click", function() {
            var a = $(this)
              , b = {
                type: "file",
                title: LNG.path_api_select_image,
                allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff",
                result: "url"
            }
              , c = a.parent().find("input").attr("data-info");
            c && (b = $.extend(b, jsonDecode(c))),
            core.api.pathSelect(b, function(c) {
                "url" == b.result && (c = core.path2url(c)),
                a.parent().find("input[type=text]").val(c).trigger("change")
            })
        })
    }, bindSelect = function() {
        seajs.use("lib/select2/css/select2.min.css"),
        require.async("lib/select2/js/select2.full.min.js", function() {
            var a = function(a, b) {
                var c = $(a).next();
                c.attr("class", c.attr("class") + " " + a.attr("class")),
                c.attr("style", c.attr("style") + " " + a.attr("style")),
                c.removeClass("select2-hidden-accessible"),
                $(a).outerWidth() <= 5 && $(a).next().attr("style", ""),
                a.on("select2:select", function(b) {
                    if (!a.attr("multiple"))
                        return void a.select2("close");
                    var c = $(b.params.data.element);
                    c.detach(),
                    a.append(c),
                    a.trigger("change.select2"),
                    a.parent().find(".select2-search__field").val("")
                }).on("select2:unselect", function(a) {
                    stopPP(a.params.originalEvent)
                }).on("change", function() {
                    setTimeout(function() {
                        $(window).trigger("resize")
                    }, 10)
                }),
                "group" == b && a.on("select2:open", function() {
                    require.async("lib/ztree/ztree", function() {
                        initGroupTree(a, serverCache[b])
                    })
                });
                var d = a.attr("data-value");
                d && (a.attr("multiple") && (d = d.split(",")),
                a.val(d).trigger("change"))
            };
            $wrap.find("select").each(function() {
                var b = $(this)
                  , c = b.attr("data-server")
                  , d = !1;
                "tags" == b.parents(".form-row").attr("data-type") && (d = !0),
                c ? loadDataServer(c, function(e) {
                    b.select2({
                        data: e,
                        tags: d,
                        tokenSeparators: [",", " "],
                        closeOnSelect: !1
                    }),
                    a(b, c)
                }) : (b.select2({
                    closeOnSelect: !1,
                    tags: d,
                    tokenSeparators: [",", " "]
                }),
                a(b, c))
            })
        })
    }, bindSegment = function() {
        var a = $wrap.find(".form-segment .btn-group")
          , b = "btn-active";
        a.find("button").unbind("click").bind("click", function() {
            var a = $(this).attr("data-value");
            $(this).parents(".setting-content").find("input").val(a).trigger("change"),
            $(this).parent().find("button").removeClass(b),
            $(this).addClass(b)
        })
    }, bindUserSelect = function() {
        var a = $wrap.find(".form-userSelect .btn-group")
          , b = "btn-active"
          , c = "hidden";
        a.find("button").unbind("click").bind("click", function() {
            var a = $(this).attr("data-type")
              , d = $(this).parents(".btn-group")
              , e = d.parent().find(".user-select")
              , f = d.parent().find(".user-select-" + a);
            e.filter(":visible");
            d.attr("multiple") ? "all" == a ? (d.find("button").removeClass(b),
            $(this).addClass(b),
            e.addClass(c),
            f.removeClass(c)) : ($(this).toggleClass(b),
            f.toggleClass(c),
            $(this).hasClass(b) ? d.find("[data-type=all]").removeClass(b) : d.find("." + b).exists() || d.find("[data-type=all]").addClass(b)) : (d.find("button").removeClass(b),
            $(this).addClass(b),
            e.addClass(c),
            f.removeClass(c))
        })
    }, bindCityPicker = function() {
        seajs.use("lib/city-picker/css/city-picker.css"),
        require.async("lib/city-picker/city-picker.data", function() {
            require.async("lib/city-picker/city-picker", function() {
                $wrap.find(".form-cityPicker input").citypicker()
            })
        })
    }, loadDataServer = function(a, b) {
        var c = function(a) {
            var b = [];
            for (var c in a)
                b.push({
                    id: c,
                    text: a[c].name
                });
            return b
        };
        if (serverCache[a] && b)
            return void b(c(serverCache[a]));
        var d = {
            user: G.appHost + "systemMember/get",
            group: G.appHost + "systemGroup/get",
            role: G.appHost + "systemRole/get"
        };
        return null == serverCache[a] ? void Hook.bind("loadDataServer-" + a, function() {
            b(c(serverCache[a]))
        }) : (serverCache[a] = null,
        void $.ajax({
            url: d[a],
            dataType: "json",
            error: function() {
                serverCache[a] = !1,
                Tips.tips(LNG.system_error, 0)
            },
            success: function(d) {
                return d.code ? (serverCache[a] = d.data,
                b && b(c(serverCache[a])),
                void Hook.trigger("loadDataServer-" + a)) : void Tips.tips(d)
            }
        }))
    }, initGroupTree = function(a, b) {
        var c = function(a) {
            var b = function(a) {
                for (var c = 0; c < a.length; c++)
                    void 0 != a[c] ? (a[c].pid = a[c].parentID,
                    a[c].id = a[c].groupID,
                    delete a[c].children,
                    delete a[c].parentID,
                    delete a[c].groupID,
                    a[c].child && (a[c].children = a[c].child,
                    delete a[c].child,
                    b(a[c].children))) : delete a[c]
            }
              , c = []
              , d = $.extend(!0, {}, a);
            for (var e in d) {
                var f = d[e]
                  , g = f.parentID;
                if (d[g])
                    d[g].child || (d[g].child = []),
                    d[g].child.push(d[f.groupID]);
                else {
                    var h = d[f.groupID];
                    h && c.push(h)
                }
            }
            return b(c),
            c
        }
          , d = {
            view: {
                showLine: !1,
                selectedMulti: !1,
                dblClickExpand: !1,
                addDiyDom: function(a, b) {
                    var c = 12
                      , d = $("#" + a + " #" + b.tId + "_switch")
                      , e = $("#" + a + " #" + b.tId + "_ico");
                    if (e.before(d).after('<i class="font-icon check-icon"></>').before('<span class="tree_icon button">' + core.iconSmall("group-guest") + "</span>").removeClass("ico_docu").addClass("group_icon").remove(),
                    b.level >= 1) {
                        var f = "<span class='space' style='display:inline-block;width:" + c * b.level + "px'></span>";
                        d.before(f)
                    }
                    $("#" + a + " #" + b.tId + "_a").attr("data-group-id", b.id)
                }
            },
            callback: {
                onClick: function(a, b, c) {
                    e(b, c)
                }
            }
        }
          , e = function(b, c) {
            var d = $("#" + c.tId + "_a");
            if (d.removeClass("curSelectedNode"),
            a.attr("multiple")) {
                d.toggleClass("this");
                var e = a.val();
                $.isArray(e) || (e = []),
                d.hasClass("this") ? e.push(c.id) : e = lodash.without(e, c.id),
                $.each(e, function() {
                    var b = a.find("[value=" + this + "]");
                    b.detach(),
                    a.append(b)
                }),
                a.val(e).trigger("change")
            } else
                $("#" + b + " [treenode_a].this").removeClass("this"),
                d.toggleClass("this"),
                a.val(c.id).trigger("change"),
                a.select2("close")
        }
          , f = function() {
            var b = a.val()
              , c = $(".select2-container--open .group-list-tree").attr("id")
              , d = $.fn.zTree.getZTreeObj(c);
            $("#" + c + " [treenode_a]").removeClass("this"),
            "string" == typeof b && (b = [b]),
            b && d && d.getNodesByFilter(function(a) {
                inArray(b, a.id + "") && $("#" + a.tId + "_a").addClass("this")
            })
        }
          , g = function(a) {
            var b = $(".select2-container--open .group-list-content");
            b.find(".select2-results__options,.group-list-tree").removeClass("hidden"),
            "search" == a ? b.find(".group-list-tree").addClass("hidden") : b.find(".select2-results__options").addClass("hidden")
        }
          , h = function(b) {
            var e = function(a) {
                a.unbind("change input").bind("change input", function() {
                    g($(this).val().length > 0 ? "search" : "tree")
                })
            };
            if (e(a.attr("multiple") ? a.parent().find(".select2-search__field") : $(".select2-container--open .select2-search__field")),
            $(".select2-container--open .group-list-tree").exists())
                return f(),
                void g("tree");
            a.on("open", function() {
                f()
            }).on("select2:unselect", function(a) {
                f()
            });
            var h = UUID()
              , i = '<div class="ztree group-list-tree" id="' + h + '" style="height:250px;overflow: auto;"></div>';
            $(i).appendTo(".select2-container--open .select2-results"),
            $(".select2-container--open .select2-results__options").addClass("hidden").parent().addClass("group-list-content");
            var j = c(b);
            $.fn.zTree.init($("#" + h), d, j);
            var k = $.fn.zTree.getZTreeObj(h);
            k && k.expandAll(!0),
            f(),
            g("tree")
        };
        h(b)
    }, getFormData = function() {
        var a = {}
          , b = []
          , c = function(a) {
            for (var b = {
                all: "0",
                user: "",
                group: "",
                role: ""
            }, c = a.split(";"), d = 0; d < c.length; d++) {
                var e = c[d].split(":");
                2 == e.length && (b[e[0]] = e[1])
            }
            return "0" != b.all || b.user || b.group || b.role ? !0 : !1
        };
        if ($wrap.find(".form-row").each(function() {
            var d = $(this)
              , e = $(this).attr("data-type")
              , f = $(this).find("[name]")
              , g = ($(this).find(".setting-title .require").exists(),
            f.attr("name"))
              , h = !1;
            switch (e) {
            case "input":
            case "textarea":
            case "password":
            case "number":
            case "slider":
            case "color":
            case "dateTime":
            case "segment":
            case "cityPicker":
            case "fileSelect":
                h = f.val();
                break;
            case "codeEditor":
                h = d.find(".ace_editor").data("editor").getValue();
                break;
            case "switch":
                h = f.prop("checked") + 0 + "";
                break;
            case "radio":
                h = f.filter(":checked").attr("value");
                break;
            case "checkbox":
                h = [],
                f.filter(":checked").each(function() {
                    h.push($(this).val())
                }),
                h = h.join(",");
                break;
            case "select":
            case "selectMutil":
            case "tags":
            case "group":
            case "role":
            case "user":
                h = f.val(),
                $.isArray(h) && (h = h.join(",")),
                null == h && (h = "");
                break;
            case "userSelect":
                var i = {
                    all: "0",
                    user: "",
                    group: "",
                    role: ""
                };
                d.find(".btn-group .btn-active").each(function() {
                    var a = $(this).attr("data-type")
                      , b = "1";
                    "all" != a && (b = $(d).find(".user-select-" + a + " select").val(),
                    $.isArray(b) && (b = b.join(",")),
                    null == b && (b = "")),
                    i[a] = b
                }),
                h = "all:" + i.all + ";user:" + i.user + ";group:" + i.group + ";role:" + i.role
            }
            "undefined" != typeof g && ($(this).removeClass("error"),
            itemsConfig[g] && itemsConfig[g].require && (h === !1 || null === h || "string" == typeof h && "" === h || "userSelect" == itemsConfig[g].type && !c(h)) ? ($(this).addClass("error"),
            b.push({
                name: g,
                value: h
            })) : a[g] = h)
        }),
        b.length > 0) {
            Tips.tips(LNG.PluginConfigNotNull, "warning");
            var d = $wrap.find(".panel-body")
              , e = $wrap.find(".form-row.error");
            if (!e.parents(".tab-pane").hasClass("active")) {
                var f = e.parents(".tab-pane").attr("id");
                $wrap.find('.tab-group [data-id="' + f + '"]').click()
            }
            e.inScreen() || d.animate({
                scrollTop: e.offset().top - d.offset().top + d.scrollTop()
            }, 100),
            e.find("[name]").first().focus(),
            e.find(".setting-content").flash(3, 100)
        }
        return {
            checked: 0 == b.length,
            error: b,
            result: a
        }
    }, loadFile = function(a) {
        require.async(a, function(a) {
            a && ($.isFunction(a) ? a() : "object" == typeof a && a.hasOwnProperty("main") && $.isFunction(a.main) && a.main())
        })
    }, makeHtml = function(a) {
        if ("string" == typeof a)
            return loadFile(file),
            !1;
        if ($.isPlainObject(a.formStyle) && a.formStyle.loadFile) {
            var b = a.formStyle.loadFile;
            "string" == typeof b && (b = [b]),
            $.isArray(b) && $(b).each(function(a, b) {
                loadFile(b)
            })
        }
        itemsConfig = a,
        wrapID = UUID();
        var c = template.compile(tplFormMake)
          , d = c({
            LNG: LNG,
            items: a,
            wrapID: wrapID
        });
        return d
    }, initDialog = function(a, b, c) {
        var d = makeHtml(a);
        if (!d)
            return !1;
        var e = {
            padding: 0,
            fixed: !0,
            resize: !0,
            title: LNG.search,
            ico: core.icon("config"),
            width: 700,
            height: 510,
            content: d,
            okVal: LNG.button_save,
            ok: function() {
                var a = getFormData();
                return a.checked ? c(a.result) : !1
            }
        };
        if ($.isPlainObject(b))
            for (var f in b)
                e[f] = b[f];
        var g = $.dialog(e)
          , h = g.DOM.wrap.find(".aui-title").html();
        return g.DOM.wrap.find(".modal-title").html(h),
        bindEvent(),
        g
    }, initAce = function() {
        if (!window.initAceTrue) {
            window.initAceTrue = !0;
            var a = ace.require("ace/lib/net");
            a.loadScript.hook("loadScript", a, function() {
                return "string" == typeof arguments[0] && -1 !== arguments[0].search("mode-php.js") && (arguments[0] = arguments[0].replace("mode-php.js", "mode-phhp.js")),
                arguments
            }),
            ace.config.moduleUrl.hook("moduleUrl", ace.config, function() {
                return -1 !== arguments[0].search("php_worker") && (arguments[0] = arguments[0].replace("php_worker", "phhp_worker")),
                arguments
            });
            var b = ace.require("ace/mouse/default_handlers").DefaultHandlers;
            b.prototype.onMouseDown.hook("onMouseDown", b.prototype, function() {
                arguments[0].preventDefault = function() {
                    return !0
                }
            });
            var c = ace.require("ace/virtual_renderer").VirtualRenderer;
            c.prototype.showComposition.hook("showComposition", c.prototype, function() {
                return this.session.selection.rangeCount > 1 ? "hookReturn" : void 0
            });
            var d = ace.require("ace/editor").Editor;
            d.prototype.$checkMultiselectChange.hook("$checkMultiselectChange", d.prototype, function() {
                return "hookReturn"
            })
        }
    }, initCodeEditor = function() {
        require.async(["lib/ace/src-min-noconflict/ace"], function() {
            initAce(),
            require.async("lib/ace/src-min-noconflict/ext-language_tools", function() {
                ace.config.loadModule("ace/ext/language_tools", function() {
                    ace.snippetManager = ace.require("ace/snippets").snippetManager
                }),
                $wrap.find(".form-codeEditor textarea").each(function() {
                    initEditor($(this))
                })
            }),
            require.async("lib/ace/emmet.min.js", function() {
                require.async("lib/ace/src-min-noconflict/ext-emmet", function() {
                    ace.require("ace/ext/emmet"),
                    $wrap.find(".form-codeEditor .ace_editor").each(function() {
                        var a = $(this).data("editor");
                        a && a.setOptions({
                            enableEmmet: !0
                        })
                    })
                })
            })
        })
    }, initEditor = function(a) {
        var b = $(a.parent())
          , c = a.attr("data-theme") || "tomorrow"
          , d = a.attr("data-mode") || "javascript"
          , e = a.attr("data-fontSize") || 14
          , f = UUID()
          , g = a.height() || "150px"
          , h = a.width() || "90%"
          , i = a.attr("style");
        a.attr("id", f);
        var j = ace.edit(f)
          , k = b.find(".ace_editor");
        b.find(".ace_editor").data("editor", j),
        k.css({
            width: h,
            height: g
        }),
        k.attr("style", k.attr("style") + ";" + i);
        var l = j.getSession();
        l.setTabSize(4),
        l.setUseSoftTabs(!1),
        l.setUseWrapMode(!0),
        j.setFontSize(e),
        j.setTheme("ace/theme/" + c),
        j.getSession().setMode("ace/mode/" + d),
        j.$blockScrolling = 1 / 0,
        j.setDragDelay(20),
        j.setShowInvisibles(!1),
        j.setAnimatedScroll(!0),
        j.setAutoScrollEditorIntoView(!0),
        j.setOptions({
            enableEmmet: !0,
            enableSnippets: !0,
            enableBasicAutocompletion: !0,
            enableLiveAutocompletion: !0
        }),
        j.commands.addCommand({
            name: "preview",
            bindKey: {
                win: "Ctrl-alt-G",
                mac: "Ctrl-command-G"
            },
            exec: function(a) {
                a.findAll(a.session.getTextRange()),
                cursorChange()
            }
        })
    };
    return {
        makeHtml: makeHtml,
        bindEvent: bindEvent,
        getFormData: getFormData,
        initDialog: initDialog
    }
});
;var _kod_0x4aed = ['TGrDmG7CoA==', 'EsOBw4PCicOgw68cJ8OARRTDqcK5', 'woY0Q8OJSsKh', 'w6jDlybCtyY=', 'w5Q8wrw=', 'FRfDjijCksOPEmEXWmk=', 'w5lkf8O7wqLCk1fDlMOyNsKewpPCtQ==', 'wpN7wokwdw==', 'IsK/wpsRw5TDpsOcHA==', 'SmDDtn3CuXUcw6c=', 'YxPDuMOFw6M=', 'w5Exwqs1OMK/wqs=', 'w6fDii3Cvg==', 'YRDDqsO4w5Mxwp0L', 'O8K5wr/CosOUw7kq', 'wqROwqTCn8K3', 'GcKCEMKCY1fDk8Ko', 'w6jDvi/CrE7CrsOF', 'w7VIbMKrLg==', 'w7PDiiTCsiENcHTCjRc9w7kqw4A=', 'IsK/wpsRw5TDpsOcHHwewpMPFkAI', 'wpLDuh9/PmPDhhZrw57CrFEs', 'EMO+N8OiPQ==', 'P0zCpMORwrIMwr1kwplewo8=', 'wqdtPEnDnBvDi8O9K8KAEQ==', 'wphsHMKgwo/Do8O9wrdPwpgfZMKJ', 'worDq8Odw5AofUckTMOQVMKbwrnCvFTCnA==', 'w4/DnwTChcK8', 'wo90wrLCgMK7bFxaw7slw7g=', 'IsKuwrjCsMO6w6g9wrbCmmd6wpjCgQ==', 'wr9VesKhw40=', 'W2XDoFvCu2A=', 'PsO7wr/Csm8A', 'w4dnP8Oi', 'wohywr3CmMKxcw==', 'VMOrw6k5', 'w7/DoyjCv0zCs8ODwosmw6on', 'LxfDucOPw7PCmg==', 'CBUrwqRPwp7CicOfwqF3w7U=', 'aQQ7wocFwoocbUrCucKfwoY=', 'woPDp8OAw4QDZUdpa8OVRsKJwqg=', 'w7czwrw4OQ==', 'CcKIEsKTZVvDiMKXAMKnMg==', 'TwYsUGXCpw==', 'wrd0w7xUwpY+OsK5IsO6w7s=', 'IhHDrcO+w7M3wpU=', 'w7TDmwMDwpU=', 'VxYsw7BJworCnMOhwrckwqLCpWjDnMOnXk7Ck3Q2wqfDiMKdf2zDrFrDgcOz', 'wp4+dsO8Rw==', 'M8KWDMKDRQ==', 'bCENVkc=', 'eg4nUVI=', 'w7PDgDPCmWY=', 'JMKuwr4Bw5E=', 'QlDDpMOHw61swoXCpDTDnMKXQ8Oaw4YmwpPDqV/DusKLw6h0LcO4RMONw40ffh8=', 'C2rCn1XDqQ==', 'w5xzfMOiwoU=', 'LcOwwr/CmW0=', 'w4jDlwzClcKr', 'awlKScOY', 'wpHDuBlhAw==', 'VhvDjzLCg8OSHlhfWXk4wqzCnMOnDHI3KCU/wqY1RxHDmsOaQsOfRRfDp8KecMKFwp7Cow52d01VGQXCqA==', 'wp85U8OCaw==', 'wqVgPFPDqQ==', 'wrhaw6TCoDY=', 'w4PDpMOHw4M5ZQ9tXMOcSg==', 'w6c6woEQKA==', 'w4TDgizCtgI=', 'w5IzFcK8Jw==', 'w4nDuykhwrM=', 'TxhYZsOp', 'wqDDl8ObKsOv', 'RmHDvEvCpg==', 'wqd+w75FwpAyIcKG', 'w6zDo8OaE3I=', 'LFbCucON', 'woB+wrLCk8KqfA==', 'wqlXR8Kgw5Q=', 'wo4ZZSXDjw==', 'JhrDp8Ouw4ocwpc=', 'MQTCvsONw5M=', 'HArCqsKqWsKHKcKcXcOnwoXDv8Olw7I7wr8ywrXCqFzCmcKDcsOBwqDDg8OrwqPCrBhbMUEvRcK2w6lYwqMYNkkdEsO4w7Abw5zCnxvCgijDiMKcw48XMUcZQEjChDPDhVDCrcKtbsK2XMKqFsK9ZyLCsEvDikpSwofDjMKhWhPCrFxNwq3CkQHCvCfDjcKfw4tW', 'w53CoU0lHik=', 'w6Qywr4tFA==', 'ZUDCocKEw7/Dig==', 'FcOkw6bDkQY=', 'FsOQw4jCkcOa', 'w5lQccKpw4s=', 'ZAleWMOfZg==', 'LcO/wrfCoXI=', 'wonDvh1/Eg==', 'wq9ow4TCjQ==', 'P0/Cq8OWwqQ6wqhEwpk=', 'woJMw55PwqU=', 'woTDtn4Qw7g=', 'wpPCgFjCiMOXw6kEwqbCpA==', 'wqnCnzDCqjQuNXnClFg9w6J4wpXDhsO+FsKjw4BZaUvCgxw3w5/DjEUBw4IfwqXDtMO3PcObw7lC', 'wpxew6vCiis=', 'EcOxw7PDrBk=', 'wrpqw7bCtBU=', 'P0/CpcOLwrI=', 'IAwwwpw5', 'Ygg7wpY=', 'RgrDuMK6Qg==', 'VMOnw7Qqw6vCsg==', 'w7/DpC/Cp03CucOSwqg=', 'w7DDvTc9', 'w5gRBsKtMg==', 'wr/DvcOaIsOTwo0=', 'w4J4wrPCmsKqcVBjwrMmw6jCocOEOQ/DvE/CnA==', 'D23DvE7CoGA=', 'wrjDoCfCqUzCpw==', 'w5Q7wrsxKcKgwqXDg0g=', 'F3jCv3DCsMKrBcKuwp8=', 'SQDDpcKn', 'wqRow4rCgA==', 'IA86wpYp', 'wq12N1DDig==', 'LcO1wqDCumAawpJs', 'acKxw6/CkQkFwqFK', 'w7JFF8Kdwp3DlcO0w7kf', 'PcKPA2Z9', 'H8OYwoHCvlU=', 'O2fCp3fClA==', 'GsOXw5jDignClxrDmw==', 'w6dvw47Clw7Di8OawqbDkMOKwqU=', 'DcOCw6XCiMOK', 'OMORJcOuFw==', 'REjDp2zCmg==', 'bUrCisKCwrtaw7hnw6bCj8Khwp4jw5ILJsKOX8KqHBR6woVQdMOIw5B3OsOrO8OZbS9Yw4U/fkRswrnCoikVNSzDq8Kswpw=', 'w57DuMOSGUXCnsK9aQ==', 'D2nDt1DCoA==', 'wpnDth9u', 'Lzl3VsKowrdZew==', 'axrDrMOvw5c=', 'wqNswpQN', 'T2XDpl8=', 'XgwvS3bCusODw63DpcOtJw==', 'ZQUxwrEgwp8Kcw==', 'wo0yScOZSsK3d19SEcKGwr3CqUjCnQnDjnIYXA==', 'BgfCtsOQ', 'CsOIwoM=', 'wplfasKs', 'wpNgHMKx', 'wpfDrghAAw==', 'UQpv', 'wpFoBsK0', 'NVfCr8OIwqQ=', 'wrF8wooM', 'w7XDqCEkwpQ=', 'w6Fpw5wUNj/Dr3MHwpHClsOCwoXDnsOEe8Kv', 'PMKqwpkNw6k=', 'OcODH8OzGh4=', 'w4xlTcKYEg==', 'UwQpVGc=', 'woA8SsOI', 'w5JyVMOdTsKhPVs=', 'w63DuDAmwqM=', 'wrVRZ8Kow6U=', 'w73Dvionwrc=', 'w4llG8O1wqXDu8O5wql/w4lcdMKVKcK+wp7CoMKdG31qw6tQwoDDi8ODwpDDtFA=', 'OELCvsOE', 'A8KTGcKKcw==', 'wo5KbMKkw4AI', 'wrR6wokFZy3CuHw=', 'w7/DsykkwobDgcOCIA==', 'LMKqwrrCqcORw707wrDCqg==', 'JmfCo0jDnmRew78=', 'PUDCqcOAwqQHwqJMwoVD', 'PUDCqcOAwqQHwqJMwoU=', 'VBckUmA=', 'IivDjcO7w6w=', 'wpxObsKow4ALfMOc', 'w4LDrDDChg==', 'w63DqsO7OFk=', 'wp7DrwFvGXPDtxQ=', 'YxDDssOPw7M=', 'VBrDusKs', 'exlS', 'bA1EXg==', 'LcO1wqPCo2QMwoJSF8KgKA==', 'w73DuCAKwovDjsOVIA==', 'KcKzwpsA', 'w6FDZcK+Nw==', 'w5fDusOPEEU=', 'wrB6w6ZB', 'w5UeXA==', 'wo3DrsOBw58v', 'w4pXBMKcwqs=', 'HMOvw78jw6o=', 'X8KJwoNZ', 'w5nDocOQD18=', 'wo95NsKSwqs=', 'JsOSA8O9ABE=', 'wrd0w79NwpIoKsKH', 'RADCt8OQw7g=', 'KxvDs8OMw6LCnA==', 'wqXDjibCtCA=', 'LBzDqsOnw5YhwpQA', 'GhnDkyg=', 'w5Q+wqwxKA==', 'w53DrcOEE1nCnw==', 'w5ZyOcO1wrBB', 'wpzDsB9+Em/DlzZNw5zCuA==', 'Qw/Dq8K6RcKoO8KCBQ==', 'aiBpQ8Kzwqc=', 'LsK8w6LCnw4I', 'JGXCrEHDj3ZWw7E2', 'w5dtcMO9wpjCqVPDlMOU', 'w5w7wrc6', 'w5cWH8Kt', 'GmjCrknDmQ==', 'w4h1wrPCkMK7', 'w7BKFcKLwp3DqMO+w7ED', 'NsOxw5TCtsOG', 'w7PDrCEnw4rDmMOPPcKJJcOk', 'wqkMa8Ojew==', 'w57DrMOrEkI=', 'AzHDrMOuw5I=', 'wpbDtyFNLg==', 'C8KXDMKCbkfDqMK1', 'OcKAKcKhYg==', 'DQ8rwrNewo/CksO8', 'LMKkwrjCscOWw6QswpbCvGVu', 'wpEWbz8=', 'T1Qmwr9EwpLCmMOqwrBUw6XCqHLCksO6SBbCiTYvw6LDgMKdPGbDrFbDg8K9Fw==', 'HcOfw5XDigTCkVTDgRzDjiY=', 'WWHDv1HCo3E=', 'w7jDpSfCp0bCrMOowqsiw7w=', 'woo0RsOBQMKoXB9WGg==', 'cMKBw6rCkTs=', 'wrZnNE/DnBDDlw==', 'UhMkUUzCq8OS', 'FsOGw5HDiEbCgRDDng3DiCU=', 'Rw/DpcKrUw==', 'woxMfcKiw4oK', 'G8KPE8KPSA==', 'wp0DAMKhJ8OBLMKU', 'GMOCw4DDlA==', 'bsK5w6LCkQQD', 'wqZgw5TCkQ==', 'EhHDgTDCmMOQS10HXWg=', 'K8KiwrfCqcOcw7t1wrbCsGU=', 'w4xFGMKRwo3DjcOSw7UI', 'wqZ+w7RSwpY1Jg==', 'w5R2LcOiwrtGEw==', 'Py3DmRbCmA==', 'IcOqwqjCuVYdwph7HcK5', 'PsKowpYLw7nDtw==', 'wpnDsMOPw4E=', 'w43DoyzCg8KrKA==', 'SsKSwo4=', 'wohyPsO5w7NBEsKrfsKLDMKXw4PDr8ORwp0zbMKBwrZ8w7PDniUbwoAJPMOuwol5wqs0woXDlh4oRw==', 'w5Exwr0=', 'wqzDsMOBJMOW', 'w6DDhwrCtDw=', 'w6DDii/Cp8KC', 'w4LDmgvCqiM=', 'KBjDu8OYw7PCgA==', 'wpoyVw==', 'J8Oywp3CkFg=', 'IMKvwoEBw6/DmsOcGF8fwpQ=', 'GxsiwrVy', 'wovDsAE=', 'GsOZw5rDkg7Cjg3DvQzDiSc=', 'NErCrsOBwrIa', 'wrvDs8OEw5gk', 'HMOLw4PCiMOMw6MNB8OmRwA=', 'G8ONw4g=', 'wqPDtcOeIg==', 'w7jDvigqwovDhsOFOA==', 'w7HDgjHCvzs0', 'wogZezXDhHc=', 'PVfCvsOX', 'wpwRaDzDhWQ=', 'w4p6OMOk', 'wrR6woocYzvCqEJWwoPDlg==', 'w7TDtSAtwoLDgQ==', 'w6PDii3Cvg==', 'wodgFcK9wrLDmsO9wrR5w5oNf8KVMMOkwp/CscKIWn9owqhIw4jDjMOC', 'SnDDpkw=', 'woLDq8Odw4U=', 'JsOzwqnCs2Qa', 'WBfDkDnCmcKaEUUcUHMhw7XCn8OmDGQkPzcjw6VpFg3DlsOBC8OJDFXDocKSasKQwpnCtx95JBQUAEHDpUsiWwNjwpdPXQ==', 'w4zDpC3CpMK0LMKpSA==', 'w7VPGsKc', 'NRvDsMOEw6DCkcOJw67DvMOKwoM=', 'w7rDpSjCrw==', 'wpkcbRPDhmJxw5E=', 'DwjCisOCw6k=', 'EcOXw4fDpQfClwrDgw==', 'EH3Cv2/CrMKCScKgwpsNw6UcKTQNbcKL', 'wo/DpsOKw7ImcFF3', 'ZknDpXjCmA==', 'Azl9RsKo', 'wqR6wo/CucKN', 'w53DhMObHUU=', 'PQnDh8OTw70=', 'G8ONw57CncOLw7cc', 'HArCqsKqWsKHKcKcXcOnwoXDv8Olw7I7wr8ywrXCqF4=', 'I8O9w4LDjTw=', 'w4/DqxPCjUs=', 'w7EiCsKjKQ==', 'PCBgW8Kywp5oek1ewqoNOUs=', 'LDHDuiTCvg==', 'w5Exwqs1OMK/wqvChlXDhMKIw6sKfsOjwoY=', 'Fj7DpMOBw4c=', 'dAM4wpcF', 'wr3DtBVmFA==', 'PMKSAm9rw6o=', 'w4jDpR/CplM=', 'wqLDvGk5w4Y=', 'SiUSWFE=', 'wp0HS8OAdQ==', 'wpFXMA==', 'A8OwwoTCpE8=', 'wozDnh58Mw==', 'BEXCm8OOwq0=', 'wrzDkcOLMsOx', 'C8Obw5jDsjo=', 'w5HDqXA=', 'bzRyZcOP', 'w7PDuhY/wpM=', 'w6PDsTbCu8KE', 'woUrYMO5eQ==', 'VAzDkMKwZQ==', 'D8Oxwp3Clkg=', 'w7RDaMKcJw==', 'w6N/JcKSwp4=', 'BWDDu1/CuXsIwrlowr3Dv8KZ', 'N8OOwqvClWk=', 'w4DDrD/CjsKpKsOpQMKQHQ==', 'wr5Tw4FqwoM=', 'NcKLwpwIw40=', 'DsKOHcKLb0TCkcK3DMKn', 'NhbDssODw54=', 'w4dNZMKmBVfCrDfDgMOCwpo=', 'WsKPwoNJU0DCm8ORw74Kwrc=', 'LBvDrcO/w5crwoUjwr/CjcK9', 'w4ofHcK/', 'wpplwp4daA==', 'w6LDrzDCscKn', 'Zw47woYpwoYNTXzCv8KF', 'w5xodcOqwo7CiQ==', 'wrhEBcKTwos=', 'woE7QcOeSsK7', 'wph0wqw=', 'KAvDqcOOw6TCvMOvw6vDusORwoQ=', 'GsKGDsKCblc=', 'KcOYA8OuEQE9PSbCn8Oh', 'wqR6w7VFwqs=', 'KGPCoVHDr21Sw6M=', 'w5TDrRXChno=', 'E8OFw7XCjcOQ', 'DxsxwrE=', 'wp9yZ8Ksw4A=', 'wrjDoSPCpVw=', 'w55VUMKqCw==', 'KcKiwrjCoQ==', 'w6DDhyfCmTkhZmk=', 'TcKSwoRaUV3CnQ==', 'w7LDhi/CvzY0emg=', 'wr3DtcOPL8OJwrQ0wqbDoWzDgMOvwqkG', 'L0bCpsOAwrQAwqZb', 'wrN8wpcJZC/CuS9XwoTDkMOfw5bDjsKWYw==', 'w7XDrwAgwpTDn8OKMsKU', 'C8KYwpstw6w=', 'FcOTw5rDgR/Cng==', 'w4xLbsK2BUE=', 'wpPDvil7Dg==', 'wpcUHcKmNMODMcKSw4zCscKhOlvCoMO0wpnCr8K2', 'KcKzwpkQw7jDoA==', 'f3DCplfDlWdRw7E=', 'BgfCtMOAw7h/', 'woXDpsONCAPDlMKEY8O5wrc1ERIrwrwvNgfCpHnDsB4kw5DDm8KOPA==', 'AGbCt2TCpMKAFg==', 'awNeS8OOdsK1wpPDisKuS8OTw6HCmnvCjw==', 'SQ3DrsKsTsKpPA==', 'cx3Co8Oow54ywoIdw6fDgcKuw5Euw4pHPMKeDcOmXUUowphYa8KcwploPsOiKcKVZjdYwpU9cExkwq7ComUVPinDrsK6w49AZsK9w41ew5vDisOkwrDDksKowpbDglzDjMKNW8Obw6DCr8ODL3RgS8Kvw4DCmMOpwq/DisOmw63DqncEw6pDw7bDpMOAwrPDi13Ci8OIC0I=', 'wr9RC8K2woI=', 'wr7CsnrDpEDDtQ==', 'LSZpR8Kjwqt5WV0ewqw=', 'Gx3DjinCvsODA0E=', 'QwzDpMK9U8KeLsKiBcKrwpY=', 'woHDlFcvw7k=', 'w5V2J8O1wr1BFMKt', 'JsKuwpAJw64=', 'woVvwrnCmcKt', 'woHCl0nChMOKw70='];
(function(_0x37d617, _0x4e928d) {
    var _0x44bc9b = function(_0x3cbcc5) {
        while (--_0x3cbcc5) {
            _0x37d617['push'](_0x37d617['shift']());
        }
    };
    _0x44bc9b(++_0x4e928d);
}(_kod_0x4aed, 0x125));
var _kod_0x2fb4 = function(_0xd7e4ec, _0x173890) {
    _0xd7e4ec = _0xd7e4ec - 0x0;
    var _0x46e0ab = _kod_0x4aed[_0xd7e4ec];
    if (_kod_0x2fb4['VZzcrD'] === undefined) {
        (function() {
            var _0x55a887;
            try {
                var _0x2d0323 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x55a887 = _0x2d0323();
            } catch (_0x4ba2c4) {
                _0x55a887 = window;
            }
            var _0x5cb42a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x55a887['atob'] || (_0x55a887['atob'] = function(_0x53abf5) {
                var _0x1870af = String(_0x53abf5)['replace'](/=+$/, '');
                for (var _0x4743ee = 0x0, _0x8beb9, _0x367029, _0x22fce1 = 0x0, _0x111fe3 = ''; _0x367029 = _0x1870af['charAt'](_0x22fce1++); ~_0x367029 && (_0x8beb9 = _0x4743ee % 0x4 ? _0x8beb9 * 0x40 + _0x367029 : _0x367029,
                _0x4743ee++ % 0x4) ? _0x111fe3 += String['fromCharCode'](0xff & _0x8beb9 >> (-0x2 * _0x4743ee & 0x6)) : 0x0) {
                    _0x367029 = _0x5cb42a['indexOf'](_0x367029);
                }
                return _0x111fe3;
            }
            );
        }());
        var _0x28fb30 = function(_0x1858f9, _0x282463) {
            var _0x2c2fc3 = [], _0x37d0d8 = 0x0, _0x2217b5, _0x1933ca = '', _0xf20a63 = '';
            _0x1858f9 = atob(_0x1858f9);
            for (var _0x7ea581 = 0x0, _0x156454 = _0x1858f9['length']; _0x7ea581 < _0x156454; _0x7ea581++) {
                _0xf20a63 += '%' + ('00' + _0x1858f9['charCodeAt'](_0x7ea581)['toString'](0x10))['slice'](-0x2);
            }
            _0x1858f9 = decodeURIComponent(_0xf20a63);
            for (var _0x2aef82 = 0x0; _0x2aef82 < 0x100; _0x2aef82++) {
                _0x2c2fc3[_0x2aef82] = _0x2aef82;
            }
            for (_0x2aef82 = 0x0; _0x2aef82 < 0x100; _0x2aef82++) {
                _0x37d0d8 = (_0x37d0d8 + _0x2c2fc3[_0x2aef82] + _0x282463['charCodeAt'](_0x2aef82 % _0x282463['length'])) % 0x100;
                _0x2217b5 = _0x2c2fc3[_0x2aef82];
                _0x2c2fc3[_0x2aef82] = _0x2c2fc3[_0x37d0d8];
                _0x2c2fc3[_0x37d0d8] = _0x2217b5;
            }
            _0x2aef82 = 0x0;
            _0x37d0d8 = 0x0;
            for (var _0x1a0aa4 = 0x0; _0x1a0aa4 < _0x1858f9['length']; _0x1a0aa4++) {
                _0x2aef82 = (_0x2aef82 + 0x1) % 0x100;
                _0x37d0d8 = (_0x37d0d8 + _0x2c2fc3[_0x2aef82]) % 0x100;
                _0x2217b5 = _0x2c2fc3[_0x2aef82];
                _0x2c2fc3[_0x2aef82] = _0x2c2fc3[_0x37d0d8];
                _0x2c2fc3[_0x37d0d8] = _0x2217b5;
                _0x1933ca += String['fromCharCode'](_0x1858f9['charCodeAt'](_0x1a0aa4) ^ _0x2c2fc3[(_0x2c2fc3[_0x2aef82] + _0x2c2fc3[_0x37d0d8]) % 0x100]);
            }
            return _0x1933ca;
        };
        _kod_0x2fb4['NWEHda'] = _0x28fb30;
        _kod_0x2fb4['azoEVJ'] = {};
        _kod_0x2fb4['VZzcrD'] = !![];
    }
    var _0x13b92f = _kod_0x2fb4['azoEVJ'][_0xd7e4ec];
    if (_0x13b92f === undefined) {
        if (_kod_0x2fb4['OFjxoo'] === undefined) {
            _kod_0x2fb4['OFjxoo'] = !![];
        }
        _0x46e0ab = _kod_0x2fb4['NWEHda'](_0x46e0ab, _0x173890);
        _kod_0x2fb4['azoEVJ'][_0xd7e4ec] = _0x46e0ab;
    } else {
        _0x46e0ab = _0x13b92f;
    }
    return _0x46e0ab;
};
define('app/common/rightMenuExtence', [], function(_0x1e8f40, _0x43a6c6) {
    var _0x205cc1 = {};
    _0x205cc1[_kod_0x2fb4('0x0', 'zqus')] = function(_0x4ba31f, _0x5ce8c2) {
        return _0x4ba31f(_0x5ce8c2);
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x1', 'h]Y(')] = 'UYSrx';
    _0x205cc1['oyyft'] = _kod_0x2fb4('0x2', '6vN4');
    _0x205cc1['laXqy'] = function(_0x14ccff, _0x18c61d) {
        return _0x14ccff(_0x18c61d);
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x3', 'g!LU')] = function(_0xb5d37e, _0x1534d2) {
        return _0xb5d37e && _0x1534d2;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x4', 'kFqV')] = _kod_0x2fb4('0x5', '!QPr');
    _0x205cc1['DBnIq'] = '.context-menu-list:visible';
    _0x205cc1['JXycD'] = _kod_0x2fb4('0x6', 'M5[N');
    _0x205cc1['lZMCl'] = _kod_0x2fb4('0x7', 'YnH7');
    _0x205cc1['IOjuo'] = function(_0x71046d, _0x15d434) {
        return _0x71046d < _0x15d434;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x8', 'CkRd')] = function(_0x375eba, _0x9506cd) {
        return _0x375eba != _0x9506cd;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x9', 'nRdT')] = _kod_0x2fb4('0xa', 'h]Y(');
    _0x205cc1['QjfyN'] = function(_0x3b9149, _0x44ac8e) {
        return _0x3b9149 + _0x44ac8e;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0xb', '6TNR')] = _kod_0x2fb4('0xc', 'Xx6M');
    _0x205cc1[_kod_0x2fb4('0xd', '@!h6')] = _kod_0x2fb4('0xe', 'uXoq');
    _0x205cc1[_kod_0x2fb4('0xf', 'BW2R')] = _kod_0x2fb4('0x10', 'rev*');
    _0x205cc1[_kod_0x2fb4('0x11', 'CkRd')] = function(_0xfe5d72, _0x252901) {
        return _0xfe5d72 >= _0x252901;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x12', 'Vpcd')] = function(_0xba925b, _0x285231) {
        return _0xba925b === _0x285231;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x13', '%eHl')] = '<ul\x20class=\x22context-menu-list\x20';
    _0x205cc1[_kod_0x2fb4('0x14', 'X[yR')] = _kod_0x2fb4('0x15', 'CxUO');
    _0x205cc1[_kod_0x2fb4('0x16', '3@2!')] = function(_0x1406c6, _0x2cc5fb, _0x29fbb8, _0x1dcfd3) {
        return _0x1406c6(_0x2cc5fb, _0x29fbb8, _0x1dcfd3);
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x17', 'BW2R')] = _kod_0x2fb4('0x18', '9I4]');
    _0x205cc1[_kod_0x2fb4('0x19', '65x5')] = function(_0x3350e3, _0x90db91) {
        return _0x3350e3 + _0x90db91;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x1a', 'YnH7')] = _kod_0x2fb4('0x1b', 'fTfo');
    _0x205cc1[_kod_0x2fb4('0x1c', 'IQrb')] = function(_0x4b7c18, _0x421ce0) {
        return _0x4b7c18 == _0x421ce0;
    }
    ;
    _0x205cc1['HoATV'] = '.context-menu-list';
    _0x205cc1[_kod_0x2fb4('0x1d', 'sQlu')] = function(_0x37b8c3, _0x5a11b3) {
        return _0x37b8c3 + _0x5a11b3;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x1e', 'fTfo')] = function(_0x7b89b5, _0x33657b) {
        return _0x7b89b5 === _0x33657b;
    }
    ;
    _0x205cc1[_kod_0x2fb4('0x1f', 'X[yR')] = 'oKsmR';
    _0x205cc1[_kod_0x2fb4('0x20', 'M5[N')] = _kod_0x2fb4('0x21', '3@2!');
    _0x205cc1['eIAEk'] = _kod_0x2fb4('0x22', 'G^0Q');
    _0x205cc1[_kod_0x2fb4('0x23', '&]9E')] = _kod_0x2fb4('0x24', 'zqus');
    _0x205cc1[_kod_0x2fb4('0x25', '3@2!')] = _kod_0x2fb4('0x26', 'fTfo');
    _0x205cc1[_kod_0x2fb4('0x27', 'znAB')] = 'resize-full';
    _0x205cc1[_kod_0x2fb4('0x28', ')N5k')] = _kod_0x2fb4('0x29', 'N]$y');
    _0x205cc1[_kod_0x2fb4('0x2a', 'kFqV')] = 'qrcode';
    $[_kod_0x2fb4('0x2b', 'G^0Q')] || ($[_kod_0x2fb4('0x2c', 'QkSF')] = {}),
    $[_kod_0x2fb4('0x2d', '@!h6')][_kod_0x2fb4('0x2e', 'nRdT')] = function(_0xb7c69e, _0x4d8d1f, _0x1f6732) {
        if (_0x205cc1[_kod_0x2fb4('0x2f', 'ZWtD')] !== _kod_0x2fb4('0x30', 'fTfo')) {
            _0xb7c69e && ($[_kod_0x2fb4('0x31', 'uXoq')][_kod_0x2fb4('0x32', '1sqA')](),
            $(_0xb7c69e)['contextMenu']({
                'x': _0x4d8d1f,
                'y': _0x1f6732
            }));
        } else {
            var _0x9bda5c = _0x205cc1[_kod_0x2fb4('0x33', 'JPSO')]($, this)[_kod_0x2fb4('0x34', 'X[yR')]();
            _0x9bda5c[_kod_0x2fb4('0x35', '6vN4')] += $(this)[_kod_0x2fb4('0x36', 'kFqV')](),
            $(this)[_kod_0x2fb4('0x37', 'N]$y')]()['parent']()[_kod_0x2fb4('0x38', 'E*IS')]({
                'x': _0xb7c69e[_kod_0x2fb4('0x39', 'znAB')],
                'y': _0x9bda5c['top']
            });
        }
    }
    ,
    $['contextMenu'][_kod_0x2fb4('0x3a', 'YlgJ')] = function() {
        if (_0x205cc1['oyyft'] === _kod_0x2fb4('0x3b', 'CkRd')) {
            var _0x1e8f40 = _0x205cc1[_kod_0x2fb4('0x3c', '!QPr')]($, '.context-menu-active')
              , _0x43a6c6 = _0x1e8f40[_kod_0x2fb4('0x3d', 'vn!#')]('contextMenu');
            if (_0x205cc1[_kod_0x2fb4('0x3e', 'CxUO')](_0x1e8f40, _0x43a6c6)) {
                var _0x1cac20 = _0x43a6c6[_kod_0x2fb4('0x3f', 'CkRd')]
                  , _0x39a216 = _0x205cc1[_kod_0x2fb4('0x40', 'G^0Q')];
                _0x1cac20[_kod_0x2fb4('0x41', 'qVjU')]('.disable')[_kod_0x2fb4('0x42', 'i5Xp')](_0x39a216),
                Hook[_kod_0x2fb4('0x43', 'QkSF')]('rightMenu.show', _0x43a6c6[_kod_0x2fb4('0x44', 'i5Xp')], _0x1e8f40, _0x1cac20),
                Hook['trigger'](_kod_0x2fb4('0x45', '65x5') + _0x43a6c6[_kod_0x2fb4('0x46', '9I4]')], _0x1e8f40, _0x1cac20);
            }
        } else {
            $[_kod_0x2fb4('0x2b', 'G^0Q')]['menuItemClass'](_0x1e8f40, _0x43a6c6, _kod_0x2fb4('0x47', 'ZWtD'), !0x0);
        }
    }
    ,
    $['contextMenu'][_kod_0x2fb4('0x48', 'sQlu')] = function() {
        return 0x0 == $(_0x205cc1[_kod_0x2fb4('0x49', ')N5k')])[_kod_0x2fb4('0x4a', 'YnH7')] ? !0x1 : !0x0;
    }
    ,
    $['contextMenu'][_kod_0x2fb4('0x4b', 'G^0Q')] = function() {
        if (_0x205cc1['lZMCl'] === _0x205cc1['lZMCl']) {
            _0x205cc1[_kod_0x2fb4('0x4c', 'BW2R')]($, _kod_0x2fb4('0x4d', 'nRdT'))[_kod_0x2fb4('0x4e', ')N5k')](_kod_0x2fb4('0x4f', 'YlgJ'))[_kod_0x2fb4('0x50', 'H@Ee')](_kod_0x2fb4('0x51', 'g!LU'))[_kod_0x2fb4('0x52', '[rxe')](_kod_0x2fb4('0x53', 'IQrb'));
        } else {
            return _0x1e8f40 ? -0x1 !== _0x1e8f40[_kod_0x2fb4('0x54', 'M5[N')]('/') ? _kod_0x2fb4('0x55', '@!h6') + _0x1e8f40 + '\x22></i>' : _0x205cc1[_kod_0x2fb4('0x56', 'JPSO')] + _0x1e8f40 + _kod_0x2fb4('0x57', 'CkRd') : '';
        }
    }
    ,
    $[_kod_0x2fb4('0x58', 'h]Y(')][_kod_0x2fb4('0x59', '6TNR')] = function(_0x2fea22, _0x367e50) {
        var _0x501b2a, _0xa5ce4c = $[_kod_0x2fb4('0x5a', 'M5[N')][_kod_0x2fb4('0x5b', 'Vpcd')];
        for (var _0x35e531 in _0xa5ce4c)
            if (_0xa5ce4c[_0x35e531]['selector'] == _0x2fea22 || _0xa5ce4c[_0x35e531]['selector'] == '.' + _0x2fea22 || _0xa5ce4c[_0x35e531][_kod_0x2fb4('0x5c', 'ra&A')] == '#' + _0x2fea22) {
                _0x2fea22 = _0xa5ce4c[_0x35e531][_kod_0x2fb4('0x44', 'i5Xp')],
                _0x501b2a = _0xa5ce4c[_0x35e531];
                break;
            }
        if (void 0x0 === _0x367e50)
            return _0x501b2a[_kod_0x2fb4('0x5d', ')N5k')];
        if (!_0x501b2a || !_0x501b2a[_kod_0x2fb4('0x5e', '6vN4')])
            return !0x1;
        _kod_0x2fb4('0x5f', 'wY@c') == typeof _0x367e50 && (_0x367e50 = [_0x367e50]);
        for (var _0x8cc909 = !0x1, _0x3f15f2 = 0x0; _0x205cc1['IOjuo'](_0x3f15f2, _0x367e50['length']); _0x3f15f2++) {
            if ('BOhPm' === _kod_0x2fb4('0x60', 'zqus')) {
                $['contextMenu'][_kod_0x2fb4('0x61', '!QPr')](_0x2fea22, _0x367e50, _kod_0x2fb4('0x62', 'X[yR'), !0x0);
            } else {
                var _0x5887e6 = _0x501b2a['items'][_0x367e50[_0x3f15f2]] && _0x501b2a[_kod_0x2fb4('0x63', 'i5Xp')][_0x367e50[_0x3f15f2]]['$node'];
                _0x5887e6 && _0x205cc1['SgUFb'](0x0, _0x5887e6['length']) && (_0x8cc909 = _0x8cc909 ? _0x8cc909[_kod_0x2fb4('0x64', 'Xx6M')](_0x5887e6) : _0x5887e6);
            }
        }
        return _0x8cc909;
    }
    ,
    $[_kod_0x2fb4('0x65', '6TNR')][_kod_0x2fb4('0x66', '1sqA')] = function(_0xb1ce54, _0x26484a, _0x282fc7, _0x3c6d98) {
        if (_kod_0x2fb4('0x67', 'ZWtD') !== 'BpkYq') {
            var _0x448335 = $[_kod_0x2fb4('0x5a', 'M5[N')][_kod_0x2fb4('0x68', ')N5k')](_0xb1ce54, _0x26484a);
            _0x448335 && (_0x3c6d98 ? _0x448335[_kod_0x2fb4('0x69', 'zqus')](_0x282fc7) : _0x448335['removeClass'](_0x282fc7));
        } else {
            var _0x49d18d = _0x26484a[_kod_0x2fb4('0x6a', 'kFqV')]
              , _0x374b68 = _kod_0x2fb4('0x6b', 'Xx6M');
            _0x49d18d[_kod_0x2fb4('0x6c', 'i5Xp')](_kod_0x2fb4('0x6d', '@!h6'))['addClass'](_0x374b68),
            Hook[_kod_0x2fb4('0x6e', 'qVjU')](_0x205cc1[_kod_0x2fb4('0x6f', '6vN4')], _0x26484a[_kod_0x2fb4('0x70', 'N]$y')], _0xb1ce54, _0x49d18d),
            Hook[_kod_0x2fb4('0x71', 'CkRd')](_0x205cc1[_kod_0x2fb4('0x72', 'G^0Q')](_kod_0x2fb4('0x73', 'i5Xp'), _0x26484a['selector']), _0xb1ce54, _0x49d18d);
        }
    }
    ,
    $['contextMenu'][_kod_0x2fb4('0x74', ')N5k')] = function(_0x4ec21b, _0x216464) {
        $['contextMenu'][_kod_0x2fb4('0x75', 'BW2R')](_0x4ec21b, _0x216464, _0x205cc1[_kod_0x2fb4('0x76', 'E*IS')], !0x0);
    }
    ,
    $[_kod_0x2fb4('0x77', '9I4]')]['menuItemEnable'] = function(_0x369e7a, _0x3f09c0) {
        $[_kod_0x2fb4('0x78', '#D7I')][_kod_0x2fb4('0x79', 'JPSO')](_0x369e7a, _0x3f09c0, _kod_0x2fb4('0x7a', 'kCq#'), !0x1);
    }
    ,
    $['contextMenu']['menuItemHide'] = function(_0xb03f6d, _0x1ba8ef) {
        if (_kod_0x2fb4('0x7b', 'fTfo') !== _0x205cc1['YJgJu']) {
            $[_kod_0x2fb4('0x7c', '6vN4')][_kod_0x2fb4('0x7d', 'qVjU')](_0xb03f6d, _0x1ba8ef, _0x205cc1[_kod_0x2fb4('0x7e', 'CxUO')], !0x0);
        } else {
            var _0x3194a5 = $(this)[_kod_0x2fb4('0x7f', 'zqus')]()[_kod_0x2fb4('0x80', '3@2!')]()[_kod_0x2fb4('0x81', 'ra&A')]('id')
              , _0x48ca88 = $[_kod_0x2fb4('0x82', '6vN4')][_kod_0x2fb4('0x83', '$NRe')][_0x3194a5];
            _0x48ca88['close'](),
            $[_kod_0x2fb4('0x84', 'CkRd')][_kod_0x2fb4('0x85', 'kFqV')]();
        }
    }
    ,
    $[_kod_0x2fb4('0x86', 'vn!#')][_kod_0x2fb4('0x87', 'uXoq')] = function(_0xe9d29f, _0x4425a6) {
        $['contextMenu'][_kod_0x2fb4('0x88', 'kCq#')](_0xe9d29f, _0x4425a6, _0x205cc1[_kod_0x2fb4('0x89', 'Xx6M')], !0x1);
    }
    ,
    $[_kod_0x2fb4('0x58', 'h]Y(')]['menuItemRemove'] = function(_0x15b5c0, _0x16c13f) {
        var _0x2539c5 = $[_kod_0x2fb4('0x8a', 'N]$y')]['menuItem'](_0x15b5c0, _0x16c13f);
        _0x2539c5 && _0x2539c5[_kod_0x2fb4('0x8b', '%eHl')]();
    }
    ,
    $[_kod_0x2fb4('0x8c', 'znAB')][_kod_0x2fb4('0x8d', '@!h6')] = function(_0x596c10, _0x53d77d, _0x26f6a9, _0x5506c2) {
        var _0x41fc59 = {};
        _0x41fc59['VWLoV'] = function(_0xa37ed7, _0x26559e) {
            return _0xa37ed7 + _0x26559e;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x8e', 'sQlu')] = _kod_0x2fb4('0x8f', 'vn!#');
        _0x41fc59[_kod_0x2fb4('0x90', 'X[yR')] = function(_0x142036, _0x524abb) {
            return _0x142036(_0x524abb);
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x91', 'N]$y')] = function(_0x49d578, _0x1131c1) {
            return _0x49d578 || _0x1131c1;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x92', '%eHl')] = function(_0x4fc364, _0x335b94) {
            return _0x205cc1.NMPcL(_0x4fc364, _0x335b94);
        }
        ;
        _0x41fc59['rfHtc'] = function(_0x1f5314, _0x51ee02) {
            return _0x1f5314 + _0x51ee02;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x93', '%eHl')] = function(_0x2268fb, _0x22eee4) {
            return _0x2268fb + _0x22eee4;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x94', 'CkRd')] = _0x205cc1.wFSgB;
        _0x41fc59[_kod_0x2fb4('0x95', ')N5k')] = _kod_0x2fb4('0x96', 'H@Ee');
        _0x41fc59[_kod_0x2fb4('0x97', 'YlgJ')] = function(_0x412c2a, _0xb9262e) {
            return _0x205cc1.laXqy(_0x412c2a, _0xb9262e);
        }
        ;
        _0x41fc59['hqyJt'] = function(_0x4ee5eb, _0x236702) {
            return _0x4ee5eb + _0x236702;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x98', '1sqA')] = _0x205cc1.sZlmZ;
        _0x41fc59[_kod_0x2fb4('0x99', '3@2!')] = function(_0x242caa, _0x250fd9, _0x595109, _0x592539) {
            return _0x205cc1.MjIsN(_0x242caa, _0x250fd9, _0x595109, _0x592539);
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x9a', 'fTfo')] = _0x205cc1.sAovD;
        _0x41fc59[_kod_0x2fb4('0x9b', 'IQrb')] = function(_0x4aa84e, _0x4d130a) {
            return _0x4aa84e - _0x4d130a;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x9c', 'BW2R')] = _kod_0x2fb4('0x9d', '6TNR');
        _0x41fc59[_kod_0x2fb4('0x9e', 'X[yR')] = function(_0x3b5a09, _0x1d554e) {
            return _0x3b5a09 + _0x1d554e;
        }
        ;
        _0x41fc59['HoyeK'] = function(_0x40cf3a, _0x3cb687) {
            return _0x40cf3a + _0x3cb687;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0x9f', '#D7I')] = function(_0x2c3f4e, _0x46b6d9) {
            return _0x205cc1.sMcuL(_0x2c3f4e, _0x46b6d9);
        }
        ;
        _0x41fc59[_kod_0x2fb4('0xa0', 'VC30')] = _kod_0x2fb4('0xa1', 'kCq#');
        _0x41fc59['eUPPz'] = function(_0x5739d3, _0x51b86b) {
            return _0x5739d3 + _0x51b86b;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0xa2', 'Xx6M')] = function(_0x2e7b05, _0x3a60ed) {
            return _0x2e7b05 + _0x3a60ed;
        }
        ;
        _0x41fc59[_kod_0x2fb4('0xa3', 'i5Xp')] = _0x205cc1.rmlTQ;
        _0x41fc59['zpDGm'] = function(_0x2efa10, _0xe6f036) {
            return _0x205cc1.gXBZd(_0x2efa10, _0xe6f036);
        }
        ;
        _0x41fc59[_kod_0x2fb4('0xa4', 'nRdT')] = _0x205cc1.HoATV;
        _0x41fc59[_kod_0x2fb4('0xa5', 'sQlu')] = function(_0x1a2c38, _0x404bc1) {
            return _0x205cc1.ofRvt(_0x1a2c38, _0x404bc1);
        }
        ;
        if (_0x205cc1[_kod_0x2fb4('0xa6', 'IQrb')](_0x205cc1['kvGTV'], _kod_0x2fb4('0xa7', '65x5'))) {
            var _0x3a6414 = !0x1
              , _0x1ff1f2 = $[_kod_0x2fb4('0x2b', 'G^0Q')][_kod_0x2fb4('0xa8', 'zqus')];
            for (var _0x406c7a in _0x1ff1f2)
                if (_0x1ff1f2[_0x406c7a][_kod_0x2fb4('0xa9', 'znAB')] == _0x53d77d) {
                    if (_kod_0x2fb4('0xaa', 'g!LU') === _0x205cc1['toZyS']) {
                        for (var _0x7aaf15 in _0x53d77d)
                            _0x1ff1f2[_kod_0x2fb4('0xab', '9I4]')]({
                                'key': _0x7aaf15,
                                'value': _0x53d77d[_0x7aaf15]
                            });
                        for (var _0x49039a = _0x1ff1f2[_kod_0x2fb4('0xac', '6vN4')] - 0x1; _0x205cc1[_kod_0x2fb4('0xad', 'CxUO')](_0x49039a, 0x0); _0x49039a--)
                            _0x406c7a[_0x1ff1f2[_0x49039a]['key']] = _0x1ff1f2[_0x49039a][_kod_0x2fb4('0xae', 'D8pQ')];
                    } else {
                        _0x3a6414 = _0x1ff1f2[_0x406c7a];
                        break;
                    }
                }
            if (_0x3a6414 && _0x596c10) {
                var _0x23dc67 = function(_0x403211) {
                    return _0x403211 ? -0x1 !== _0x403211[_kod_0x2fb4('0xaf', '@!h6')]('/') ? _0x205cc1[_kod_0x2fb4('0xb0', 'H@Ee')](_kod_0x2fb4('0xb1', 'M5[N'), _0x403211) + _kod_0x2fb4('0xb2', 'BW2R') : _0x205cc1[_kod_0x2fb4('0xb3', 'Xx6M')]('<i\x20class=\x22font-icon\x20', _0x403211) + _kod_0x2fb4('0xb4', 'kFqV') : '';
                }
                  , _0x55940c = function(_0x4ae19b, _0x4aa245, _0x4b72a0, _0x5d894c) {
                    if (_0x41fc59[_kod_0x2fb4('0xb5', 'YnH7')] !== _0x41fc59['lRRwm']) {
                        var _0x53382d = _0x4b72a0[_kod_0x2fb4('0xb6', '!QPr')][_0x4aa245[_0x406c7a]] && _0x4b72a0['items'][_0x4aa245[_0x406c7a]][_kod_0x2fb4('0xb7', 'CxUO')];
                        _0x53382d && 0x0 != _0x53382d[_kod_0x2fb4('0xb8', 'IQrb')] && (_0x1ff1f2 = _0x1ff1f2 ? _0x1ff1f2['add'](_0x53382d) : _0x53382d);
                    } else {
                        var _0x1ff1f2 = []
                          , _0x406c7a = {};
                        if (_0x4b72a0) {
                            for (var _0x544f50 in _0x4aa245)
                                _0x1ff1f2['push']({
                                    'key': _0x544f50,
                                    'value': _0x4aa245[_0x544f50]
                                });
                            for (var _0x502c39 = _0x41fc59[_kod_0x2fb4('0xb9', '3@2!')](_0x1ff1f2['length'], 0x1); _0x502c39 >= 0x0; _0x502c39--)
                                _0x406c7a[_0x1ff1f2[_0x502c39]['key']] = _0x1ff1f2[_0x502c39][_kod_0x2fb4('0xba', 'BW2R')];
                        } else
                            _0x406c7a = _0x4aa245;
                        $[_kod_0x2fb4('0xbb', 'VC30')](_0x406c7a, function(_0x430ba7, _0x186856) {
                            _0x186856['className'] = _0x186856[_kod_0x2fb4('0xbc', '9I4]')] || '';
                            var _0x406c7a = _0x41fc59[_kod_0x2fb4('0xbd', 'znAB')](_0x430ba7, '\x20') + _0x186856['className'];
                            if ('string' == typeof _0x186856)
                                var _0x544f50 = _0x41fc59[_kod_0x2fb4('0xbe', 'Vpcd')] + _0x406c7a + '\x20context-menu-separator\x20not-selectable\x22></li>';
                            else {
                                var _0x502c39 = _0x186856['name'];
                                _0x186856[_kod_0x2fb4('0xbf', 'wY@c')] && (_0x502c39 += _kod_0x2fb4('0xc0', 'i5Xp') + _0x186856[_kod_0x2fb4('0xbf', 'wY@c')] + '</span>)');
                                var _0x544f50 = _0x41fc59[_kod_0x2fb4('0xc1', 'VC30')](_0x41fc59[_kod_0x2fb4('0xc2', 'YnH7')] + _0x406c7a, '\x22>') + _0x23dc67(_0x186856['icon']) + '<span>' + _0x502c39 + '</span></li>';
                            }
                            var _0x14d13c = _0x41fc59[_kod_0x2fb4('0xc3', 'VC30')]($, _0x544f50)[_kod_0x2fb4('0xc4', '9I4]')]()
                              , _0x4d8fd4 = _0x41fc59['YqpdE'](_0x4b72a0, _0x5d894c)
                              , _0x46c549 = _0x4ae19b[_kod_0x2fb4('0xc5', 'uXoq')][_kod_0x2fb4('0xc6', 'uXoq')](_0x4d8fd4)[_kod_0x2fb4('0xc7', 'M5[N')]();
                            0x0 == _0x46c549[_kod_0x2fb4('0xc8', '$NRe')] && _0x4ae19b['commands'][_0x4d8fd4] && (_0x46c549 = _0x4ae19b['commands'][_0x4d8fd4]['$node']),
                            0x0 == _0x46c549[_kod_0x2fb4('0xb8', 'IQrb')] && (_0x46c549 = _0x4ae19b['$menu'][_kod_0x2fb4('0xc9', 'CkRd')]()[_kod_0x2fb4('0xca', 'sQlu')]()),
                            _0x4b72a0 ? _0x46c549[_kod_0x2fb4('0xcb', 'nRdT')](_0x14d13c) : _0x5d894c && _0x46c549['before'](_0x14d13c);
                            var _0xe1be53 = _0x14d13c[_kod_0x2fb4('0xcc', '65x5')](_kod_0x2fb4('0xcd', '6vN4'))['data'](_kod_0x2fb4('0x78', '#D7I'));
                            _0x14d13c['data']({
                                'contextMenu': _0xe1be53,
                                'contextMenuKey': _0x430ba7,
                                'contextMenuRoot': _0x3a6414
                            });
                            var _0x40c6d7 = {};
                            _0x40c6d7[_kod_0x2fb4('0xce', 'zqus')] = null;
                            _0x40c6d7[_kod_0x2fb4('0xcf', 'CkRd')] = null;
                            _0x40c6d7[_kod_0x2fb4('0xd0', 'Xx6M')] = _0x186856.accesskey;
                            _0x40c6d7[_kod_0x2fb4('0xd1', '[rxe')] = _0x186856.className;
                            _0x40c6d7[_kod_0x2fb4('0xd2', 'M5[N')] = _0x186856.icon;
                            _0x40c6d7[_kod_0x2fb4('0xd3', 'VC30')] = _0x186856.name;
                            _0x40c6d7['_name'] = _0x502c39;
                            _0x40c6d7[_kod_0x2fb4('0xd4', 'uXoq')] = _0x14d13c;
                            if (_0xe1be53 && (_0xe1be53['items'] || (_0xe1be53['items'] = {}),
                            _0xe1be53[_kod_0x2fb4('0xd5', '#D7I')][_0x430ba7] = _0x40c6d7),
                            'string' != typeof _0x186856 && (_0x4ae19b['commands'] || (_0x4ae19b[_kod_0x2fb4('0xd6', '3@2!')] = {}),
                            _0x4ae19b['commands'][_0x430ba7] = _0x40c6d7,
                            _0x3a6414[_kod_0x2fb4('0xd6', '3@2!')][_0x430ba7] = _0x40c6d7,
                            _0x3a6414['callbacks'][_0x430ba7] = function(_0x14fb3c, _0x3c26e8) {
                                _0x186856[_kod_0x2fb4('0xd7', '&@1z')](_0x14fb3c, _0x3c26e8);
                            }
                            ,
                            _0x186856[_kod_0x2fb4('0xd0', 'Xx6M')] && (_0x3a6414['accesskeys'][_0x186856[_kod_0x2fb4('0xd8', '&]9E')]] = _0x40c6d7),
                            _0x186856[_kod_0x2fb4('0xd9', 'rev*')])) {
                                if (_0x41fc59[_kod_0x2fb4('0xda', '3@2!')]('hXnCo', _kod_0x2fb4('0xdb', '[rxe'))) {
                                    _0x186856[_kod_0x2fb4('0xdc', 'YnH7')](_0x4ae19b, _0x430ba7);
                                } else {
                                    var _0x1cae68 = _0x430ba7 + _kod_0x2fb4('0xdd', 'VC30')
                                      , _0x544f50 = _0x41fc59[_kod_0x2fb4('0xde', '!QPr')](_0x41fc59[_kod_0x2fb4('0xdf', 'E*IS')](_0x41fc59['GmfnA'](_0x41fc59[_kod_0x2fb4('0xe0', 'zqus')] + _0x430ba7, _kod_0x2fb4('0xe1', '@!h6')), _0x1cae68), _0x41fc59['ktKeL']);
                                    _0x41fc59['NlPqU']($, _0x544f50)[_kod_0x2fb4('0xe2', 'g!LU')](_0x14d13c),
                                    _0x40c6d7[_kod_0x2fb4('0xe3', 'zqus')] = _0x14d13c[_kod_0x2fb4('0xe4', 'BW2R')]('ul.' + _0x430ba7),
                                    _0x40c6d7['callback'] = null,
                                    _0x40c6d7[_kod_0x2fb4('0xe5', 'h]Y(')] = _0x40c6d7[_kod_0x2fb4('0xe6', '@!h6')],
                                    _0x40c6d7[_kod_0x2fb4('0xe7', 'ZWtD')] = 'sub',
                                    _0x14d13c[_kod_0x2fb4('0xe8', 'zqus')](_kod_0x2fb4('0xe9', '%eHl'), _0x40c6d7)[_kod_0x2fb4('0xea', 'uXoq')](_kod_0x2fb4('0xeb', 'X[yR')),
                                    _0x14d13c[_kod_0x2fb4('0xec', 'H@Ee')](_kod_0x2fb4('0xed', '!QPr') + _0x430ba7)[_kod_0x2fb4('0xee', 'CxUO')]({
                                        'contextMenuRoot': _0x3a6414,
                                        'contextMenu': _0x40c6d7
                                    }),
                                    _0x14d13c[_kod_0x2fb4('0xef', 'JPSO')](_0x41fc59[_kod_0x2fb4('0xf0', 'BW2R')](_kod_0x2fb4('0xf1', '%eHl'), _0x1cae68))[_kod_0x2fb4('0xf2', 'JPSO')]({
                                        'contextMenuRoot': _0x3a6414,
                                        'contextMenuKey': _0x1cae68,
                                        'contextMenu': _0x40c6d7
                                    }),
                                    _0x40c6d7['items'] || (_0x40c6d7[_kod_0x2fb4('0xd9', 'rev*')] = {}),
                                    _0x40c6d7[_kod_0x2fb4('0xf3', '9I4]')][_0x1cae68] = {
                                        '$input': null,
                                        '$label': null,
                                        'icon': '',
                                        'name': '',
                                        '_name': '',
                                        '$node': _0x14d13c[_kod_0x2fb4('0xf4', 'ZWtD')](_0x41fc59['hrmln'] + _0x1cae68)
                                    },
                                    _0x41fc59['cjrNl'](_0x55940c, _0x40c6d7, _0x186856[_kod_0x2fb4('0xf5', 'sQlu')], '.' + _0x1cae68);
                                }
                            }
                        });
                    }
                };
                _0x55940c(_0x3a6414, _0x596c10, _0x26f6a9, _0x5506c2);
            }
        } else {
            var _0x181222 = _kod_0x2fb4('0xf6', 'ZWtD')[_kod_0x2fb4('0xf7', ')N5k')]('|')
              , _0xeff44 = 0x0;
            while (!![]) {
                switch (_0x181222[_0xeff44++]) {
                case '0':
                    if (_kod_0x2fb4('0xf8', 'E*IS') == typeof _0x1ff1f2)
                        var _0x3a2c76 = _0x41fc59[_kod_0x2fb4('0xf9', 'G^0Q')] + _0x5b19fb + _0x41fc59[_kod_0x2fb4('0xfa', '%eHl')];
                    else {
                        var _0x53dfce = _0x1ff1f2[_kod_0x2fb4('0xfb', 'X[yR')];
                        _0x1ff1f2['accesskey'] && (_0x53dfce += '(<span\x20class=\x22context-menu-accesskey\x22>' + _0x1ff1f2['accesskey'] + _kod_0x2fb4('0xfc', 'X[yR'));
                        var _0x3a2c76 = _0x41fc59[_kod_0x2fb4('0xfd', 'sQlu')](_0x41fc59['HoyeK'](_0x41fc59[_kod_0x2fb4('0xfe', 'CxUO')](_0x41fc59[_kod_0x2fb4('0xff', 'sQlu')](_kod_0x2fb4('0x100', 'JPSO'), _0x5b19fb), '\x22>'), _0x23dc67(_0x1ff1f2['icon'])) + '<span>' + _0x53dfce, '</span></li>');
                    }
                    continue;
                case '1':
                    _0x1a134c[_kod_0x2fb4('0x101', '9I4]')]({
                        'contextMenu': _0x4ded83,
                        'contextMenuKey': _0x53d77d,
                        'contextMenuRoot': _0x3a6414
                    });
                    continue;
                case '2':
                    if (_0x4ded83 && (_0x4ded83[_kod_0x2fb4('0x102', 'N]$y')] || (_0x4ded83['items'] = {}),
                    _0x4ded83['items'][_0x53d77d] = _0x15f025),
                    _kod_0x2fb4('0x103', 'CxUO') != typeof _0x1ff1f2 && (_0x596c10[_kod_0x2fb4('0x104', 'ZWtD')] || (_0x596c10[_kod_0x2fb4('0x105', 'sQlu')] = {}),
                    _0x596c10['commands'][_0x53d77d] = _0x15f025,
                    _0x3a6414['commands'][_0x53d77d] = _0x15f025,
                    _0x3a6414[_kod_0x2fb4('0x106', 'qVjU')][_0x53d77d] = function(_0x65bae3, _0xf3fde7) {
                        _0x1ff1f2[_kod_0x2fb4('0x107', 'YlgJ')](_0x65bae3, _0xf3fde7);
                    }
                    ,
                    _0x1ff1f2['accesskey'] && (_0x3a6414[_kod_0x2fb4('0x108', '9I4]')][_0x1ff1f2[_kod_0x2fb4('0x109', '9I4]')]] = _0x15f025),
                    _0x1ff1f2[_kod_0x2fb4('0x10a', '%eHl')])) {
                        var _0x486925 = _0x53d77d + _0x41fc59['rSCEK']
                          , _0x3a2c76 = _0x41fc59[_kod_0x2fb4('0x10b', 'kFqV')]('<ul\x20class=\x22context-menu-list\x20' + _0x53d77d + '\x22>\x09\x09\x09\x09\x09\x09<li\x20class=\x22context-menu-item\x20hidden\x20hide\x20' + _0x486925, '\x22><span></span></li>\x09\x09\x09\x09\x09</ul>');
                        $(_0x3a2c76)[_kod_0x2fb4('0x10c', 'CxUO')](_0x1a134c),
                        _0x15f025['$menu'] = _0x1a134c[_kod_0x2fb4('0x10d', 'fTfo')](_0x41fc59[_kod_0x2fb4('0x10e', 'g!LU')]('ul.', _0x53d77d)),
                        _0x15f025['callback'] = null,
                        _0x15f025[_kod_0x2fb4('0x10f', 'BW2R')] = _0x15f025[_kod_0x2fb4('0x110', 'kFqV')],
                        _0x15f025[_kod_0x2fb4('0x111', 'M5[N')] = _kod_0x2fb4('0x112', 'IQrb'),
                        _0x1a134c[_kod_0x2fb4('0x113', 'IQrb')](_kod_0x2fb4('0x114', '3@2!'), _0x15f025)[_kod_0x2fb4('0x115', 'sQlu')]('context-menu-submenu'),
                        _0x1a134c[_kod_0x2fb4('0x116', ')N5k')](_0x41fc59[_kod_0x2fb4('0x117', 'G^0Q')] + _0x53d77d)['data']({
                            'contextMenuRoot': _0x3a6414,
                            'contextMenu': _0x15f025
                        }),
                        _0x1a134c['find'](_0x41fc59[_kod_0x2fb4('0x118', 'g!LU')] + _0x486925)[_kod_0x2fb4('0x119', 'znAB')]({
                            'contextMenuRoot': _0x3a6414,
                            'contextMenuKey': _0x486925,
                            'contextMenu': _0x15f025
                        }),
                        _0x15f025['items'] || (_0x15f025['items'] = {}),
                        _0x15f025['items'][_0x486925] = {
                            '$input': null,
                            '$label': null,
                            'icon': '',
                            'name': '',
                            '_name': '',
                            '$node': _0x1a134c['find'](_0x41fc59['RbYDr'](_kod_0x2fb4('0x11a', 'nRdT'), _0x486925))
                        },
                        _0x55940c(_0x15f025, _0x1ff1f2['items'], '.' + _0x486925);
                    }
                    continue;
                case '3':
                    var _0x1a134c = $(_0x3a2c76)[_kod_0x2fb4('0x11b', 'kCq#')]()
                      , _0x487aea = _0x41fc59[_kod_0x2fb4('0x11c', '&]9E')](_0x26f6a9, _0x5506c2)
                      , _0x263001 = _0x596c10[_kod_0x2fb4('0x11d', '$NRe')][_kod_0x2fb4('0x11e', 'QkSF')](_0x487aea)[_kod_0x2fb4('0x11f', 'g!LU')]();
                    continue;
                case '4':
                    _0x41fc59[_kod_0x2fb4('0x120', 'JPSO')](0x0, _0x263001[_kod_0x2fb4('0x121', 'E*IS')]) && _0x596c10['commands'][_0x487aea] && (_0x263001 = _0x596c10[_kod_0x2fb4('0x122', 'znAB')][_0x487aea][_kod_0x2fb4('0x123', 'H@Ee')]),
                    0x0 == _0x263001[_kod_0x2fb4('0x124', 'kFqV')] && (_0x263001 = _0x596c10[_kod_0x2fb4('0x125', 'i5Xp')][_kod_0x2fb4('0x126', '@!h6')]()[_kod_0x2fb4('0x127', '6TNR')]()),
                    _0x26f6a9 ? _0x263001[_kod_0x2fb4('0x128', 'Xx6M')](_0x1a134c) : _0x5506c2 && _0x263001[_kod_0x2fb4('0x129', 'g!LU')](_0x1a134c);
                    continue;
                case '5':
                    var _0x4ded83 = _0x1a134c[_kod_0x2fb4('0x12a', 'ra&A')](_0x41fc59['kDgtg'])['data'](_kod_0x2fb4('0x12b', 'BW2R'));
                    continue;
                case '6':
                    _0x1ff1f2['className'] = _0x1ff1f2[_kod_0x2fb4('0x12c', 'M5[N')] || '';
                    continue;
                case '7':
                    var _0x15f025 = {};
                    _0x15f025[_kod_0x2fb4('0x12d', 'h]Y(')] = null;
                    _0x15f025[_kod_0x2fb4('0x12e', '&@1z')] = null;
                    _0x15f025[_kod_0x2fb4('0x12f', 'YlgJ')] = _0x1ff1f2.accesskey;
                    _0x15f025[_kod_0x2fb4('0x130', '1sqA')] = _0x1ff1f2.className;
                    _0x15f025[_kod_0x2fb4('0x131', 'Xx6M')] = _0x1ff1f2.icon;
                    _0x15f025[_kod_0x2fb4('0x132', 'nRdT')] = _0x1ff1f2.name;
                    _0x15f025[_kod_0x2fb4('0x133', 'YlgJ')] = _0x53dfce;
                    _0x15f025[_kod_0x2fb4('0x134', '6vN4')] = _0x1a134c;
                    continue;
                case '8':
                    var _0x5b19fb = _0x41fc59['UgmhT'](_0x53d77d, '\x20') + _0x1ff1f2[_kod_0x2fb4('0x135', '&]9E')];
                    continue;
                }
                break;
            }
        }
    }
    ;
    var _0x228af9 = function() {
        var _0x28693d = {};
        _0x28693d[_kod_0x2fb4('0x136', '!QPr')] = _kod_0x2fb4('0x137', 'sQlu');
        _0x28693d[_kod_0x2fb4('0x138', 'X[yR')] = 'qrcode';
        _0x28693d['Uqjin'] = function(_0x3d53e9, _0x3b7c9a) {
            return _0x3d53e9(_0x3b7c9a);
        }
        ;
        _0x28693d[_kod_0x2fb4('0x139', 'g!LU')] = function(_0x9616bd, _0x5746ca) {
            return _0x9616bd !== _0x5746ca;
        }
        ;
        _0x28693d[_kod_0x2fb4('0x13a', 'kFqV')] = _0x205cc1.eIAEk;
        _0x28693d[_kod_0x2fb4('0x13b', 'BW2R')] = function(_0x21e547, _0x2cb6e2) {
            return _0x21e547(_0x2cb6e2);
        }
        ;
        return _0x205cc1['laXqy']($, '<i\x20class=\x22dialog-menu\x22></i>')[_kod_0x2fb4('0x13c', 'N]$y')]('#rightMenu'),
        _0x205cc1[_kod_0x2fb4('0x13d', 'N]$y')](_kod_0x2fb4('0x13e', 'vn!#'), typeof $[_kod_0x2fb4('0x13f', 'qVjU')]) ? console[_kod_0x2fb4('0x140', 'D8pQ')](_kod_0x2fb4('0x141', 'vn!#')) : ($['contextMenu']({
            'zIndex': 0x270f,
            'selector': _0x205cc1['pYQjp'],
            'items': {
                'dialog-quit': {
                    'name': LNG['close'],
                    'className': _kod_0x2fb4('0x142', 'YnH7'),
                    'icon': _kod_0x2fb4('0x143', 'zqus'),
                    'accesskey': 'q'
                },
                'dialog-max': {
                    'name': LNG[_kod_0x2fb4('0x144', 'CkRd')],
                    'className': _0x205cc1['yTfBh'],
                    'icon': _0x205cc1['jHSJp'],
                    'accesskey': 'a'
                },
                'dialog-min': {
                    'name': LNG[_kod_0x2fb4('0x145', 'X[yR')],
                    'className': _0x205cc1[_kod_0x2fb4('0x146', '&@1z')],
                    'icon': 'minus',
                    'accesskey': 'i'
                },
                'sep1': '--------',
                'refresh': {
                    'name': LNG['refresh'],
                    'className': _kod_0x2fb4('0x147', '#D7I'),
                    'icon': 'refresh',
                    'accesskey': 'r'
                },
                'open-window': {
                    'name': LNG[_kod_0x2fb4('0x148', '%eHl')],
                    'className': _kod_0x2fb4('0x149', 'YnH7'),
                    'icon': _kod_0x2fb4('0x14a', 'M5[N'),
                    'accesskey': 'b'
                },
                'qrcode': {
                    'name': LNG['qrcode'],
                    'className': _kod_0x2fb4('0x14b', 'CxUO'),
                    'icon': _0x205cc1[_kod_0x2fb4('0x14c', 'N]$y')],
                    'accesskey': 'c'
                }
            },
            'callback': function(_0x1f2b51, _0x2edd4b) {
                var _0x228af9 = _0x2edd4b[_kod_0x2fb4('0x14d', 'nRdT')][_kod_0x2fb4('0x14e', 'YnH7')]('id')
                  , _0x3818ad = $[_kod_0x2fb4('0x14f', '&@1z')][_kod_0x2fb4('0x150', 'VC30')][_0x228af9];
                switch (_0x1f2b51) {
                case _kod_0x2fb4('0x151', '6TNR'):
                    _0x3818ad['close']();
                    break;
                case _kod_0x2fb4('0x152', 'qVjU'):
                    _0x3818ad[_kod_0x2fb4('0x153', '&]9E')](!0x1);
                    break;
                case 'dialog-max':
                    _0x3818ad['_clickMax']();
                    break;
                case _kod_0x2fb4('0x154', 'znAB'):
                    _0x3818ad[_kod_0x2fb4('0x155', 'ra&A')]();
                    break;
                case _0x28693d[_kod_0x2fb4('0x156', '6TNR')]:
                    _0x3818ad[_kod_0x2fb4('0x157', '3@2!')]();
                    break;
                case _0x28693d['GQLNT']:
                    core[_kod_0x2fb4('0x158', ')N5k')](_0x3818ad['DOM'][_kod_0x2fb4('0x159', 'kCq#')]['find'](_kod_0x2fb4('0x15a', 'fTfo'))['attr'](_kod_0x2fb4('0x15b', 'QkSF')));
                }
            }
        }),
        void $(_kod_0x2fb4('0x15c', 'ra&A'))[_kod_0x2fb4('0x15d', 'Xx6M')]('click')['live'](_kod_0x2fb4('0x15e', '65x5'), function(_0x39ab9d) {
            if (_0x28693d[_kod_0x2fb4('0x15f', 'i5Xp')](_0x28693d[_kod_0x2fb4('0x160', 'fTfo')], _kod_0x2fb4('0x161', 'i5Xp'))) {
                var _0x43a6c6 = $(this)[_kod_0x2fb4('0x162', 'kFqV')]();
                _0x43a6c6[_kod_0x2fb4('0x163', 'X[yR')] += _0x28693d[_kod_0x2fb4('0x164', '3@2!')]($, this)[_kod_0x2fb4('0x165', ')N5k')](),
                $(this)['parent']()['parent']()['contextMenu']({
                    'x': _0x39ab9d[_kod_0x2fb4('0x166', 'vn!#')],
                    'y': _0x43a6c6[_kod_0x2fb4('0x167', 'BW2R')]
                });
            } else {
                _0x39ab9d && ($[_kod_0x2fb4('0x168', 'YnH7')][_kod_0x2fb4('0x169', '9I4]')](),
                _0x28693d[_kod_0x2fb4('0x16a', 'kCq#')]($, _0x39ab9d)[_kod_0x2fb4('0x16b', '!QPr')]({
                    'x': _0x43a6c6,
                    'y': _0x228af9
                }));
            }
        })[_kod_0x2fb4('0x16c', '!QPr')]('dblclick')[_kod_0x2fb4('0x16d', '65x5')](_kod_0x2fb4('0x16e', 'sQlu'), function(_0x5715b2) {
            var _0x43a6c6 = $(this)[_kod_0x2fb4('0x16f', 'i5Xp')]()[_kod_0x2fb4('0x170', 'D8pQ')]()[_kod_0x2fb4('0x171', '9I4]')]('id')
              , _0x228af9 = $[_kod_0x2fb4('0x172', 'D8pQ')][_kod_0x2fb4('0x173', 'ra&A')][_0x43a6c6];
            _0x228af9['close'](),
            $[_kod_0x2fb4('0x174', 'ZWtD')][_kod_0x2fb4('0x175', 'sQlu')]();
        }));
    };
    Hook[_kod_0x2fb4('0x176', 'i5Xp')](_kod_0x2fb4('0x177', 'JPSO'), function(_0xf00905, _0x28fc34) {
        var _0x228af9 = _0xf00905[_kod_0x2fb4('0x178', 'zqus')]('id')
          , _0x5c8109 = $['dialog'][_kod_0x2fb4('0x179', 'kCq#')][_0x228af9]
          , _0x473163 = _kod_0x2fb4('0x17a', '3@2!')
          , _0x57226d = _kod_0x2fb4('0x17b', '6TNR');
        _0x5c8109[_kod_0x2fb4('0x17c', 'fTfo')]() ? _0x28fc34[_kod_0x2fb4('0x17d', '&]9E')](_0x57226d)[_kod_0x2fb4('0x17e', 'kFqV')](_0x473163) : _0x28fc34[_kod_0x2fb4('0x17f', 'CkRd')](_0x57226d)[_kod_0x2fb4('0x180', 'D8pQ')](_0x473163);
        var _0x51cc52 = '.dialog-min,.dialog-max';
        $(_0x205cc1[_kod_0x2fb4('0x181', 'H@Ee')]('.', _0x228af9))[_kod_0x2fb4('0x182', 'YnH7')](_kod_0x2fb4('0x183', '[rxe')) ? _0x28fc34['find'](_0x51cc52)['removeClass'](_0x473163) : _0x28fc34['find'](_0x51cc52)[_kod_0x2fb4('0x184', 'kCq#')](_0x473163);
    }),
    _0x228af9();
});
;define("app/app/appBase", [], function(a, b) {
    var c = {}
      , d = {}
      , e = {}
      , f = !1
      , g = function(a) {
        a.title = void 0 == a.title ? a.name : a.title,
        void 0 == a.name && (a.name = UUID(),
        a.hidden = !0),
        c[a.name] = a,
        a.ext || (a.ext = "");
        var b = a.ext.split(",");
        c[a.name].extArr = b,
        "undefined" != typeof a.sort ? a.sort = parseInt(a.sort) : a.sort = 0;
        for (var e = 0; e < b.length; e++) {
            var f = trim(b[e]);
            c[a.name].extArr[e] = f,
            d[f] || (d[f] = []);
            for (var g = !1, h = 0; h < d[f].length; h++)
                if (d[f][h].name == a.name) {
                    g = !0;
                    break
                }
            g || (d[f].push({
                name: a.name,
                sort: a.sort
            }),
            d[f].length > 1 && d[f].sort(function(a, b) {
                return a.sort < b.sort
            }))
        }
        Hook.trigger("kodApp.add.finished")
    }
      , h = function() {
        return d
    }
      , i = function(a) {
        if (!a || !c[a])
            return !1;
        delete c[a];
        for (var b in e)
            if (e[b] == a) {
                delete e[b];
                break
            }
        for (var b in d) {
            for (var f = d[b], g = [], h = 0; h < f.length; h++)
                f[h].name != a && g.push(f[h]);
            0 == g.length ? delete d[b] : d[b] = g
        }
    }
      , j = function(a) {
        if ("undefined" == typeof a) {
            var b = [];
            for (var f in c)
                c[f].hidden || b.push(c[f]);
            return b
        }
        var g = e[a]
          , b = [];
        if (!g && !d[a])
            return !1;
        if (g && (c[g] ? b.push(c[g]) : delete e[a]),
        !d[a])
            return b;
        for (var h = 0; h < d[a].length; h++) {
            var i = d[a][h].name;
            c[i] && i != g && b.push(c[i])
        }
        return b
    }
      , k = function(a) {
        f = a
    }
      , l = function() {
        return f
    }
      , m = function(a, b, d) {
        if ("" != a) {
            b && "file" != b || (b = core.pathExt(a)),
            d = d ? d : "";
            var e = {
                path: a,
                ext: b,
                appName: d
            };
            if (!Hook.trigger("kodApp.open.before", e)) {
                if (a = e.path,
                b = e.ext,
                d = e.appName)
                    var f = c[d];
                else {
                    var g = j(b);
                    if (!g || 0 == g.length)
                        return void kodApp.openUnknow(a, "");
                    var f = g[0]
                }
                if (!f)
                    return Tips.tips("[" + d + "] not exists", !1);
                try {
                    n(f, a, b)
                } catch (h) {
                    console.error("kodApp.open error:", h)
                }
            }
        }
    }
      , n = function(a, b, c) {
        Hook.trigger("kodApp.callback.before", a, b, c) || (a.callback(b, c),
        Hook.trigger("kodApp.callback.after", b, c, a))
    }
      , o = function(a) {
        var b = j(a)
          , d = j("");
        "" == a && (b = !1),
        b ? b.push({
            name: ""
        }) : b = [],
        b = b.concat(d);
        for (var e = {}, f = 0; f < b.length; f++) {
            var g = b[f];
            "" == g.name || g.hidden ? e["step-line"] = "-------" : e[g.name] = {
                app: g.name,
                name: g.title,
                className: g.className,
                icon: g.icon,
                callback: function(a, b) {
                    var d = c[a];
                    if (d && d.callback) {
                        $(".context-menu-active");
                        if ($(".context-menu-active").hasClass("menu-tree-file"))
                            var e = ui.tree.makeParam();
                        else
                            var e = ui.path.makeParam();
                        n(d, e.path, e.type)
                    }
                }
            }
        }
        return e
    }
      , p = function(a, b) {
        q(a, b),
        G.userConfig.kodAppDefault = htmlEncode(jsonEncode(e)),
        G.shareInfo || $.get(G.appHost + "setting/set&k=kodAppDefault&v=" + jsonEncode(e))
    }
      , q = function(a, b) {
        if (!c[b])
            return !1;
        if ("string" == typeof a)
            e[a] = b;
        else if ($.isArray(a))
            for (var d = 0; d < a.length; d++)
                e[a[d]] = b;
        else if ($.isArray(c[b].extArr))
            for (var f = c[b].extArr, d = 0; d < f.length; d++)
                e[f[d]] = b
    }
      , r = function() {
        G.userConfig.kodAppDefault = "[]",
        e = {}
    }
      , s = function(a, b) {
        var a = c[a];
        return a ? b ? inArray(a.extArr, b) : a.ext : !1
    }
      , t = function(a, b, e) {
        var a = c[a];
        if (!a)
            return !1;
        var f = "undefined" == e ? 0 : parseInt(e);
        0 == f && "undefined" != typeof a.sort && (f = parseInt(a.sort)),
        "string" == $.type(b) && (b = b.split(","));
        for (var g = 0; g < b.length; g++) {
            var h = b[g];
            if (h) {
                inArray(a.extArr, h) || a.extArr.push(h),
                d[h] || (d[h] = []);
                for (var i = !1, j = 0; j < d[h].length; j++)
                    d[h][j].name != a.name || (d[h][j].sort = f,
                    i = !0);
                i || d[h].push({
                    name: a.name,
                    sort: f
                })
            }
        }
    }
      , u = function() {
        if (G.userConfig && G.userConfig.kodAppDefault)
            try {
                var a = G.userConfig.kodAppDefault;
                a = jsonDecode(htmlDecode(a)),
                $.isPlainObject(a) && (e = a)
            } catch (b) {}
        Hook.bind("rightMenu.show.menu-file,rightMenu.show.menu-tree-file", function(a, b) {
            if (a.hasClass("menu-tree-file"))
                var c = ui.tree.makeParam();
            else
                var c = ui.path.makeParam();
            var d = core.pathExt(c.path)
              , e = "hidden";
            if (kodApp.getApp(d)) {
                var f = kodApp.getAppMenu(d);
                b.find("li.open-with.context-menu-submenu").removeClass(e),
                b.find("ul.context-menu-list.open-with .context-menu-item").not(".open-with-first").remove(),
                $.contextMenu.menuAdd(f, ".menu-file", ".open-with-first"),
                $.contextMenu.menuAdd(f, ".menu-tree-file", ".open-with-first")
            } else
                b.find("li.open-with.context-menu-submenu").addClass(e)
        }),
        Hook.trigger("kodApp.ready")
    };
    return u(),
    {
        debug: function() {
            return {
                appList: c,
                openDefault: d,
                openUser: e
            }
        },
        add: g,
        remove: i,
        appSupportCheck: s,
        appSupportSet: t,
        getApp: j,
        getAppBind: h,
        getAppMenu: o,
        setLastOpenTarget: k,
        getLastOpenTarget: l,
        setOpenUser: p,
        setOpenUserLocal: q,
        clearOpenUser: r,
        open: m
    }
});
;define("app/app/editor", [], function(a, b) {
    kodApp.add({
        name: "aceEditor",
        title: LNG["Plugin.default.aceEditor"],
        sort: 0,
        ext: "txt,textile,oexe,inc,csv,log,asc,tsv,lnk,url,webloc,meta,localized,xib,xsd,storyboard,plist,csproj,pch,pbxproj,local,xcscheme,manifest,vbproj,strings,jshintrc,sublime-project,readme,changes,changelog,version,license,changelog,abap,abc,as,asp,aspx,ada,adb,htaccess,htgroups,htgroups,htpasswd,asciidoc,adoc,asm,a,ahk,bat,cmd,cpp,c,cc,cxx,h,hh,hpp,ino,c9search_results,cirru,cr,clj,cljs,cbl,cob,coffee,cf,cson,cakefile,cfm,cs,css,curly,d,di,dart,diff,patch,dockerfile,dot,dummy,dummy,e,ge,ejs,ex,exs,elm,erl,hrl,frt,fs,ldr,ftl,gcode,feature,.gitignore,glsl,frag,vert,gbs,go,groovy,haml,hbs,handlebars,tpl,mustache,hs,hx,html,hta,htm,xhtml,eex,html.eex,erb,rhtml,html.erb,ini,inf,conf,cfg,prefs,io,jack,jade,java,ji,jl,jq,js,jsm,json,jsp,jsx,latex,ltx,bib,lean,hlean,less,liquid,lisp,ls,logic,lql,lsl,lua,lp,lucene,Makefile,makemakefile,gnumakefile,makefile,ocamlmakefile,make,md,markdown,mask,matlab,mz,mel,mc,mush,mysql,nc,nix,nsi,nsh,m,mm,ml,mli,pas,p,pl,pm,pgsql,php,phtml,shtml,php3,php4,php5,phps,phpt,aw,ctp,module,ps1,praat,praatscript,psc,proc,plg,prolog,properties,proto,py,r,cshtml,rd,rhtml,rst,rb,ru,gemspec,rake,guardfile,rakefile,gemfile,rs,sass,scad,scala,scm,sm,rkt,oak,scheme,scss,sh,bash,bashrc,sjs,smarty,tpl,snippets,soy,space,sql,sqlserver,styl,stylus,svg,swift,tcl,tex,toml,twig,swig,ts,typescript,str,vala,vbs,vb,vm,v,vh,sv,svh,vhd,vhdl,wlk,wpgm,wtest,xml,rdf,rss,wsdl,xslt,atom,mathml,mml,xul,xbl,xaml,xq,yaml,yml,vcproj,vcxproj,vtt,filters,cer,reg,config,pem,srt,ass,lrc,opf,ncx",
        icon: G.staticPath + "images/file_icon/icon_app/ace.png",
        callback: function(a, b) {
            var c = ShareData.frameTop();
            if ("undefined" != typeof c.Editor)
                return void c.Editor.add(urlEncode(a));
            if (core.isApp("editor"))
                return void ShareData.frameChild("OpenopenEditor", function(b) {
                    b.Editor.add(urlEncode(a))
                });
            if (ShareData.frameTop("OpenopenEditor")) {
                var d = c.$.dialog.list.openEditor
                  , e = 0;
                d && "hidden" == $(d.DOM.wrap).css("visibility") && (e = 200,
                d.display(!0).zIndex().focus()),
                setTimeout(function() {
                    ShareData.frameTop("OpenopenEditor", function(b) {
                        b.Editor.add(urlEncode(a))
                    })
                }, e)
            } else {
                var f = G.appHost + "editor/edit#filename=" + urlEncode(a);
                "undefined" != typeof G.sharePage && (f = G.appHost + "share/edit&user=" + G.user + "&sid=" + G.sid + "#filename=" + urlEncode(a));
                var g = htmlEncode(urlDecode(core.pathThis(a)))
                  , h = {
                    closeBefore: function() {
                        var a = ShareData.frameTop("OpenopenEditor")
                          , b = this;
                        return a && a.Editor && a.Editor.hasFileSave() ? ($.dialog.confirm(LNG.if_save_file_tips, function() {
                            b.config.closeBefore = !1,
                            b.close()
                        }, function() {}),
                        !1) : void 0
                    }
                };
                core.openDialog(f, core.icon("edit"), g, "openEditor", h)
            }
        }
    });
    var c = ShareData.frameTop();
    c.Config && "editor" == c.Config.pageApp && kodApp.setOpenUserLocal(!1, "aceEditor")
});
;define("app/app/openWith", [], function(a, b) {
    kodApp.add({
        name: "appOpenSetting",
        title: LNG["Explorer.UI.appSetDefault"],
        ext: "",
        icon: G.staticPath + "images/file_icon/icon_others/setting.png",
        callback: function(a, b) {
            var c = "<ul class='tab-group {{if !apps}}hidden{{/if}}' role='tablist'>				<li class='tab-item {{if apps}}active{{/if}}'>					<a href='#app-list-support'aria-controls='app-list-support' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeSupport']}}</a>				</li>				<li class='tab-item {{if !apps}}active{{/if}}' >					<a href='#app-list_all' aria-controls='app-list_all' role='tab' data-toggle='tab'>						{{LNG['Explorer.UI.appTypeAll']}}</a>				</li>			</ul>			<div class='tab-content'>				<div class='app-list tab-pane {{if apps}}active{{/if}}' id='app-list-support'>					{{each apps app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}					<div class='clear'></div>				</div>				<div class='app-list tab-pane {{if !apps}}active{{/if}}' id='app-list_all'>					{{each appAll app i}}					<a data-app='{{app.name}}' href='javascript:void(0);'					draggable='false' ondragstart='return false;'					class='app-item {{if app.name==defaultApp}}select{{/if}} disable-ripple'>						{{if app.icon.indexOf('/') == -1}}							<span class='ico'><i class='font-icon {{app.icon}}'></i></span>						{{else}}							<span class='ico'><img draggable='false' ondragstart='return false;' src='{{app.icon}}'></span>						{{/if}}						<span class='name'>{{app.title}}</span>					</a>					{{/each}}				</div>			</div>			<div class='bottom mt-10'>				<input class='kui-checkbox size-small' type='checkbox' id='app-default-checkbox' {{if apps}}checked='true'{{/if}}/>				<label for='app-default-checkbox'>{{LNG['Explorer.UI.appAwaysOpen']}}</label>			</div>"
              , d = kodApp.getApp(b)
              , e = !1;
            lodash.isArray(d) && (e = d[0].name);
            var f = template.compile(c)
              , g = f({
                LNG: LNG,
                apps: d,
                defaultApp: e,
                appAll: kodApp.getApp()
            })
              , h = $.dialog({
                id: "dialog-app-select",
                className: "menu-empty",
                padding: 0,
                fixed: !0,
                ico: core.icon("search"),
                resize: !0,
                title: LNG["Explorer.UI.selectAppDesc"],
                width: 480,
                height: 360,
                padding: "20px",
                content: g,
                ok: function() {
                    return i()
                }
            })
              , i = function() {
                var c = $("#app-default-checkbox").prop("checked")
                  , d = $(".app-list.active .app-item.select").attr("data-app");
                return d ? (h.close(),
                kodApp.open(a, b, d),
                c && kodApp.setOpenUser(b, d),
                !0) : (Tips.tips(LNG["Explorer.UI.selectAppWarning"], "warning"),
                !1)
            };
            $(".tab-group .tab-item").die("click").live("click", function() {
                var a = $(this).find("[aria-controls]").attr("aria-controls");
                "app-list-support" == a ? $("#app-default-checkbox").prop("checked", !0) : $("#app-default-checkbox").prop("checked", !1)
            }),
            $(".app-item").die("click").live("click", function() {
                $(this).parent().find(".select").removeClass("select"),
                $(this).addClass("select")
            }).die("dblclick").live("dblclick", function() {
                i()
            })
        }
    })
});
;define("app/app/html", [], function(a, b) {
    var c = function(a) {
        return void 0 == a ? !1 : 0 === a.indexOf("http") ? !0 : G.shareInfo || core.pathReadable(a) ? !0 : (Tips.tips(LNG.no_permission_read_all, !1),
        core.playSound("error"),
        !1)
    };
    Hook.bind("kodApp.open.before", function(a) {
        return "folder" == a.ext ? (core.isApp("explorer") || isWap() ? ui.path.list(a.path + "/") : core.explorer(a.path),
        !0) : c(a.path) ? void ("file" == a.ext && (a.ext = "")) : !0
    }),
    kodApp.openUnknow = function(a, b) {
        void 0 == b && (b = "");
        var c = G.appHost + "pluginApp/index&search=" + core.pathExt(a)
          , d = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'appOpenSetting');"
          , e = "kodApp.open(pathHashDecode('" + pathHashEncode(a) + "'),false,'aceEditor');"
          , f = "kodApp.download(pathHashDecode('" + pathHashEncode(a) + "'));"
          , g = "core.openWindow('" + c + "');"
          , h = LNG.unknow_file_try + '<a class="pl-5 pr-5" href="javascript:void(0);" onclick="'
          , i = '<div class="unknow-file can-select" style="word-break:break-all;">				<div class="grey-8 bold mb-20">' + LNG.unknow_file_tips + "<br/>" + b + '</div>			    <div class="mt-5">1.' + h + d + '">' + LNG["Explorer.UI.openWith"] + '</a></div>			    <div class="mt-5">2.' + h + e + '">' + LNG["Explorer.UI.openWithText"] + '</a></div>			    <div class="mt-5">3.' + h + f + '">' + LNG.unknow_file_download + '</a></div>				<div class="mt-20">' + h + g + '">' + LNG.PluginCenter + "</a>" + LNG.unknow_plugin_search + "</div>			</div>";
        $.dialog({
            fixed: !0,
            icon: "warning",
            title: LNG.unknow_file_title,
            padding: "20px 50px",
            content: i,
            cancel: !0
        }),
        $(".unknow-file a").unbind("click").bind("click", function(a) {
            return $(this).parents(".artDialog").data("artDialog").close(),
            stopPP(a)
        })
    }
    ,
    kodApp.add({
        name: "download",
        title: LNG.download,
        hidden: !0,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            if (c(a)) {
                var d = a;
                "http" != a.substr(0, 4) && (d = G.appHost + "explorer/fileDownload&accessToken=" + G.accessToken + "&path=" + urlEncode(a),
                "undefined" != typeof G.sharePage && (d = G.appHost + "share/fileDownload&user=" + G.user + "&sid=" + G.sid + "&path=" + urlEncode(a))),
                $.dialog({
                    icon: "succeed",
                    title: !1,
                    time: 1.5,
                    content: LNG.download_ready + "..."
                }),
                isWap() ? window.open(d) : $('<iframe src="' + d + '" style="display:none;width:0px;height:0px;"></iframe>').appendTo("body")
            }
        }
    }),
    kodApp.download = function(a) {
        kodApp.open(a, "", "download")
    }
    ,
    kodApp.openWindow = function(a) {
        kodApp.open(a, "", "browserOpen")
    }
    ,
    kodApp.add({
        name: "browserOpen",
        title: LNG.open_ie,
        sort: -100,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var d = core.path2url(a);
            return "/" == a.substr(-1) && -1 != d.search("explorer/fileProxy&") ? Tips.tips(LNG.path_can_not_action, !1) : void (c(a) && (isWap() ? window.location.href = d : window.open(d)))
        }
    }),
    kodApp.add({
        name: "swfPlayer",
        title: "Flash Player",
        ext: "swf",
        icon: "x-item-file x-swf",
        callback: function(a, b) {
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "75%",
                height: "65%",
                padding: 0,
                content: core.createFlash(core.path2url(a))
            })
        }
    }),
    kodApp.add({
        name: "webLink",
        title: "webLink",
        ext: "url,webloc",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            core.fileGet(a, function(c) {
                if ("url" == b) {
                    var d = c.match(/URL=(.*)/);
                    if (d.length >= 2)
                        return window.open(d[1])
                } else if ("webloc" == b)
                    try {
                        var e = $($.parseXML(c))
                          , f = e.find("string").text();
                        return void window.open(f)
                    } catch (g) {}
                kodApp.open(a, b, "editor")
            })
        }
    }),
    kodApp.add({
        name: "htmlView",
        title: LNG["Plugin.default.htmlView"],
        ext: "htm,html,shtml",
        sort: 10,
        icon: "x-item-file x-html",
        callback: function(a, b) {
            var c = core.path2url(a);
            core.openDialog(c, core.icon("html"), core.pathThis(a))
        }
    }),
    kodApp.add({
        name: "pdfView",
        title: "PDF Simple",
        ext: "pdf",
        sort: 0,
        icon: "x-item-file x-pdf",
        callback: function(a, b) {
            var c = core.path2url(a)
              , d = "pdf" + UUID()
              , e = '<div id="' + d + '" style="height:100%;">			<a href="' + c + '" target="_blank" style="display:block;margin:0 auto;margin-top:80px;font-size:16px;text-align:center;">' + LNG.error + " " + LNG.download + " PDF</a></div>";
            $.dialog({
                resize: !0,
                fixed: !0,
                ico: core.icon(b),
                title: core.pathThis(a),
                width: "80%",
                height: "75%",
                padding: 0,
                content: e
            }),
            PDFObject.embed(c, "#" + d)
        }
    }),
    kodApp.add({
        name: "oexeOpen",
        title: LNG["kodApp.oexe.open"],
        ext: "oexe",
        sort: 100,
        icon: " x-item-file x-oexe",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a),
                core.openApp(c)
            })
        }
    }),
    kodApp.add({
        name: "oexeEdit",
        title: LNG["kodApp.oexe.edit"],
        ext: "oexe",
        sort: 50,
        icon: "icon-edit ",
        callback: function(a, b) {
            core.fileGet(a, function(b) {
                var c = jsonDecode(b);
                c.name = core.pathThis(a),
                c.path = a,
                ui.path.pathOperate.appEdit(c)
            })
        }
    });
    var d = {
        createApp: {
            name: LNG.app_create,
            className: "createApp newfile",
            icon: "icon-puzzle-piece x-item-file x-oexe",
            callback: function(a, b) {
                ui.path.pathOperate.appEdit(0, 0, "userAdd")
            }
        }
    };
    $.contextMenu.menuAdd(d, ".menu-body-main", ".app-install"),
    $.contextMenu.menuAdd(d, ".toolbar-path-more", ".app-install"),
    $.contextMenu.menuAdd(d, ".bodymain", ".app-install"),
    Hook.bind("rightMenu.show", function(a, b, c) {
        var d = [".menu-folder", ".menu-file", ".menu-tree-folder", ".menu-tree-file", ".menu-tree-folder-fav"];
        if (c.find(".context-menu-submenu").fadeOut(0).delay(0).fadeIn(0),
        c.removeClass("menu-auto-fit"),
        h(b),
        c.inScreen() || c.addClass("menu-auto-fit"),
        ".menu-body-main" == a) {
            var e = c.find(".set-file-icon-size.context-menu-submenu");
            "icon" == G.userConfig.listType ? e.removeClass("hidden") : e.addClass("hidden")
        }
        if (lodash.include(d, a)) {
            var f = "disabled"
              , g = ".cute,.rname,.remove"
              , i = ".open,.open-text,.down,.share,.copy,.cute,.rname,.remove,.open-browser,.search,.more-action";
            b.hasClass("file-not-readable") ? c.find(i).addClass(f) : c.find(i).removeClass(f),
            b.hasClass("file-not-writeable") ? c.find(g).addClass(f) : c.find(g).removeClass(f)
        }
    }),
    Hook.bind("rightMenu.show.menu-body-main", function(a, b) {
        var c = ".upload,.past,.newfolder,.newfile"
          , d = "disabled";
        lodash.get(G, "jsonData.info.canUpload") ? b.find(c).removeClass(d) : b.find(c).addClass(d)
    }),
    Hook.bind("rightMenu.show.menu-file", function(a, b) {
        if ($(".context-menu-active").hasClass("menu-tree-file"))
            var c = ui.tree.makeParam();
        else
            var c = ui.path.makeParam();
        var d = core.pathExt(c.path)
          , e = "hidden";
        inArray(["jpg", "jpeg", "png"], d) ? b.find(".set-background").removeClass(e) : b.find(".set-background").addClass(e)
    });
    var e = function() {
        var a = ".close-item,.refresh,.newfile,.past,.info"
          , b = ".open-browser"
          , c = ".explorer,.create-project,.open-project"
          , d = ".close-item,.newfile,.refresh,.past,.down,.copy,.cute,.remove,.more-action,.clone,.info,.zip,.zip-zip,.zip-tar,.zip-tgz"
          , e = ".newfile,.cute,.past,.rname,.zip,.remove,.clone,.create-link-home,.create-link,.create-project"
          , f = $(".menu-tool-path")
          , g = "hidden"
          , h = ui.fileLight.fileListSelect();
        f.find(".context-menu-item").addClass(g),
        0 == h.length ? f.find(a).removeClass(g) : 1 == h.length ? (f.find(".context-menu-item").removeClass(g),
        "folder" == ui.fileLight.type(h) ? f.find(b).addClass(g) : f.find(c).addClass(g)) : h.length > 1 && f.find(d).removeClass(g),
        G.jsonData && G.jsonData.info && G.jsonData.info.canUpload === !1 && f.find(e).filter(":not(." + g + ")").addClass(g)
    }
      , f = function() {
        var a = ui.fileLight.fileListSelect()
          , b = $(".kod-toolbar-path .select-button-show")
          , c = "hidden";
        G.jsonData && G.jsonData.info && (0 == a.length || G.jsonData.info.pathType == G.KOD_USER_SHARE && G.jsonData.info.id != G.userID ? b.addClass("hidden") : (b.removeClass("hidden"),
        b.find("[data-action=share]").removeClass(c),
        b.find("[data-action=rname]").removeClass(c),
        a.length > 1 && (b.find("[data-action=share]").addClass(c),
        b.find("[data-action=rname]").addClass(c))))
    }
      , g = function() {
        var a = lodash.get(G, "jsonData.info.pathType")
          , b = $(".kod-toolbar-share .select-button-show-share")
          , c = ui.fileLight.fileListSelect()
          , d = "hidden";
        a != G.KOD_USER_SHARE || 0 == c.length ? b.addClass("hidden") : (b.removeClass("hidden"),
        b.find("[data-action=shareEdit]").removeClass(d),
        b.find("[data-action=shareOpenWindow]").removeClass(d),
        c.length > 1 && (b.find("[data-action=shareEdit]").addClass(d),
        b.find("[data-action=shareOpenWindow]").addClass(d)))
    };
    Hook.bind("explorer.fileSelect.init", function() {
        ui.fileLight.listNumberSet()
    }),
    Hook.bind("explorer.fileSelect.change", function() {
        e(),
        f(),
        g(),
        ui.fileLight.selectNumSet()
    }),
    Hook.bind("rightMenu.show.toolbar-path-more", function() {
        e()
    }),
    Hook.bind("rightMenu.initFinished", function() {
        if (1 != G.isRoot) {
            var a = "hidden"
              , b = {
                "explorer.fileDownload": "@.down,@.download,@.share,@.open-text,[data-action=download]",
                "explorer.search": "@.search",
                "explorer.mkfile": "@.newfile,[data-action=newfile],@.past,@.clone",
                "explorer.mkdir": "@.newfolder,[data-action=newfolder]",
                "explorer.pathRname": "@.rname,[data-action=rname]",
                "explorer.pathDelete": "@.remove,@.remove + .context-menu-separator,[data-action=remove]",
                "explorer.pathCopy": "@.cute,@.copy,[data-action=cute],[data-action=copy]",
                "explorer.fileUpload": "@.upload,@.upload-more,[data-action=upload],[data-action=upload-more]",
                "explorer.unzip": "@.unzip",
                "explorer.zip": "@.zip",
                "userShare.set": "@.share,[data-action=share]"
            };
            setTimeout(function() {
                for (var c in b) {
                    var d = replaceAll(b[c], "@", ".context-menu-list ");
                    core.authCheck(c) || $(d).addClass(a)
                }
            }, 100),
            core.authCheck("explorer.fileDownload") || (kodApp.remove("browserOpen"),
            kodApp.remove("htmlView"))
        }
    }),
    Hook.bind("kodApp.callback.before", function(a, b, c) {
        return -1 == $.inArray(a.name, ["browserOpen", "htmlView", "zipView"]) || core.authCheckGroup("explorer.fileDownload", b) ? void 0 : (Tips.tips(LNG.no_permission_action, "error"),
        !0)
    });
    var h = function(a) {
        return
    }
      , i = function() {
        if (G.authGroupRole || (G.authGroupRole = {}),
        lodash.get(G, "jsonData.info.pathType") == G.KOD_GROUP_PATH) {
            var a = lodash.get(G, "jsonData.info.id");
            G.authGroupRole[a] = lodash.get(G, "jsonData.info.groupRole.authArr")
        }
        h()
    };
    Hook.bind("explorer.path.ajaxLive", i)
});
;define("app/common/tpl/copyright.html", [], '<div class="dialog-copyright-content">\n	<div class="title">\n		<div class="logo">\n			<i class="icon-cloud"></i>\n			{{if kod.window.core.versionType==\'A\'}}KodExplorer {{else}} {{LNG.kod_name}} {{/if}} v{{G.version}}\n		</div>\n		<div class=\'info\'>——{{LNG.kod_name_copyright}}</div>\n	</div>\n	<div class="content">\n		<p>{{@LNG.copyright_desc}}</p>\n		<div>{{@LNG.copyright_contact}}</div>\n		<div>{{@LNG.copyright_info}}</div> \n	</div>\n</div>\n');
;define("app/common/tpl/themeDIY.html", [], "@media screen and (max-width:100000px) {\n	body .full-background{\n		position: absolute;top: 0px;left: 0px;bottom: 0px;right: 0px;\n		background-color: #020202;background-size: 100% 100%;\n	}\n\n	{{if blurSize= (bgBlur==0?0:10) }}{{/if}}\n	body .full-background:before{\n		-webkit-filter: blur({{blurSize}}px);\n		-moz-filter: blur({{blurSize}}px);\n		-ms-filter: blur({{blurSize}}px);\n		filter: blur({{blurSize}}px);\n	}\n	{{if bgType == 'image'}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left,\n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-image:url({{bgImage}});\n		}\n		body .aui-state-focus .aui-title,body .aui-title{\n			background-size:100%;\n		}\n	{{else}}\n		body .full-background,\n		body .full-background:before,\n		body #body .menu-left, \n		body #body .app-menu-left,\n		body .aui-buttons,\n		body .aui-state-focus .aui-title,body .aui-title{\n			background:{{endColor}};\n			filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='{{startColor}}', endColorstr='{{endColor}}');\n			background-image: -webkit-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -moz-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -o-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: -ms-linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n			background-image: linear-gradient({{colorRotate}}deg, {{startColor}}, {{endColor}});\n		}\n	{{/if}}\n}\n");
;define("app/src/setting/fav", [], function(a, b) {
    var c = G.appHost + "fav/"
      , d = function(a) {
        $.ajax({
            url: c + "get",
            dataType: "json",
            async: !1,
            success: function(b) {
                return b.code ? void e(b.data, a) : void Tips.tips(b)
            },
            error: function() {
                return !1
            }
        })
    }
      , e = function(a, b) {
        var c = "<tr class='title'><td class='name'>" + htmlEncode(LNG.name) + "<span>(" + LNG.can_not_repeat + ")</span></td><td class='path'>" + htmlEncode(LNG.address) + "<span>(" + LNG.absolute_path + ")</span></td><td class='action'>" + LNG.action + "</td></tr>";
        for (var d in a)
            c += "<tr class='favlist' name='" + htmlEncode(a[d].name) + "' path='" + htmlEncode(a[d].path) + "'>   <td class='name'><input type='text' id='sname' value='" + htmlEncode(a[d].name) + "' /></td>   <td class='path'><input type='text' id='spath' value='" + htmlEncode(a[d].path) + "' /></td>   <td class='action'>		<button class='btn btn-default btn-sm edit'>" + LNG.button_save_edit + "</button>		<button class='btn btn-default btn-sm del'>" + LNG.button_del + "</button>   </td></tr>";
        if ($("table#list").html(c),
        b && "fav&" == b.substring(0, 4)) {
            var e = b.split("&")[1].split("=")[1]
              , f = b.split("&")[2].split("=")[1]
              , g = b.split("&")[3].split("=")[1];
            e = htmlEncode(urlDecode(e)),
            f = htmlEncode(urlDecode(f));
            var h = "<tr class='favlist' name='' path=''>   <input type='hidden' id='stype' value='" + g + "' />   <td class='name'><input type='text' id='sname' value='" + e + "' /></td>   <td class='path'><input type='text' id='spath' value='" + f + "' /></td>   <td class='action'>		<button class='btn btn-default btn-sm addsave'>" + LNG.button_save + "</button>		<button class='btn btn-default btn-sm addexit'>" + LNG.button_cancel + "</button>   </td></tr>";
            $(h).insertAfter("table#list tr:last")
        }
    }
      , f = function() {
        var a = "<tr class='favlist' name='' path=''>   <input type='hidden' id='stype' value='folder' />   <td class='name'><input type='text' id='sname' value='' /></td>   <td class='path'><input type='text' id='spath' value='' /></td>   <td class='action'>		<button class='btn btn-default btn-sm addsave'>" + LNG.button_save + "</button>		<button class='btn btn-default btn-sm addexit'>" + LNG.button_cancel + "</button>   </td></tr>";
        $(a).insertAfter("table#list tr:last")
    }
      , g = function() {
        var a = $(this).parent().parent();
        $(a).detach()
    }
      , h = function() {
        var a = $(this).parent().parent()
          , b = $(a).find("#sname").val()
          , d = $(a).find("#spath").val()
          , e = $(a).find("#stype").val();
        return "" == b || "" == d ? (Tips.tips(LNG.not_null, "error"),
        !1) : void $.ajax({
            url: c + "add&name=" + urlEncode(b) + "&path=" + urlEncode(d) + "&type=" + e,
            dataType: "json",
            success: function(c) {
                if (Tips.tips(c),
                c.code) {
                    $(a).attr("name", b),
                    $(a).attr("path", d);
                    var e = "<button class='btn btn-default btn-sm edit'>" + LNG.button_save_edit + "</button><button class='btn btn-default btn-sm del'>" + LNG.button_del + "</button>";
                    $(a).find("td.action").html(e),
                    ShareData.frameTop("", function(a) {
                        a.ui.tree.refreshFav()
                    })
                }
            }
        })
    }
      , i = function() {
        var a = $(this).parent().parent()
          , b = $(a).attr("name")
          , e = $(a).find("#sname").val()
          , f = $(a).find("#spath").val();
        return "" == e || "" == f ? (Tips.tips(LNG.not_null, "error"),
        !1) : void $.ajax({
            dataType: "json",
            url: c + "edit&name=" + urlEncode(b) + "&nameTo=" + urlEncode(e) + "&pathTo=" + urlEncode(f),
            success: function(b) {
                Tips.tips(b),
                b.code && ($(a).attr("name", e),
                ShareData.frameTop("", function(a) {
                    a.ui.tree.refreshFav()
                }),
                d())
            }
        })
    }
      , j = function() {
        var a = $(this).parent().parent()
          , b = $(a).attr("name");
        $.ajax({
            url: c + "del&name=" + urlEncode(b),
            dataType: "json",
            async: !1,
            success: function(b) {
                Tips.tips(b),
                b.code && ($(a).detach(),
                ShareData.frameTop("", function(a) {
                    a.ui.tree.refreshFav()
                }))
            }
        })
    }
      , k = function() {
        $(".fav .add").live("click", f),
        $(".fav .addexit").live("click", g),
        $(".fav .addsave").live("click", h),
        $(".fav .edit").live("click", i),
        $(".fav .del").live("click", j)
    };
    return k(),
    {
        init: d
    }
});
;define("app/src/setting/setting", ["./page/about.html", "./page/fav.html", "./page/help.html", "./page/member.html", "./page/system.html", "./page/theme.html", "./page/user.html", "./page/wall.html"], function(a, b) {
    var c, d = function(a) {
        core.setSkin(a),
        ShareData.frameTop("", function(b) {
            b.ui.setTheme(a)
        }),
        "diy" != a ? $(".theme-diy-setting").addClass("hidden") : $(".theme-diy-setting").removeClass("hidden")
    }, e = function(a) {
        core.setSkin(a)
    };
    template.helper("menuInfoDecode", function(a) {
        var b = htmlEncode(urlDecode(a));
        return b
    });
    var f = function(b) {
        var c = {
            about: a("./page/about.html"),
            fav: a("./page/fav.html"),
            help: a("./page/help.html"),
            member: a("./page/member.html"),
            system: a("./page/system.html"),
            theme: a("./page/theme.html"),
            user: a("./page/user.html"),
            wall: a("./page/wall.html")
        };
        return c[b]
    }
      , g = function(a) {
        ("" == a || void 0 == a) && (a = "user"),
        c = a,
        "fav&" == a.substring(0, 4) && (a = "fav"),
        $(".selected").removeClass("selected"),
        $("ul.setting a#" + a).addClass("selected");
        var b = window.location.href;
        -1 != b.indexOf("#") && (b = b.substr(0, b.indexOf("#"))),
        window.location.href = b + "#" + a,
        $.ajax({
            url: G.appHost + "setting/slider&slider=" + a,
            beforeSend: function(a) {
                $(".main").html("<img src='" + G.staticPath + "images/common/loading.gif'/>")
            },
            success: function(b) {
                if ("about" == a) {
                    var d = b.data;
                    if (b.data = "",
                    !core.tools.about(d))
                        return;
                    b.data = d
                }
                var e = $(".menu-left .selected").clone();
                e.find(".ripple-father").remove();
                var g = "<div class='h1'>" + e.html() + "</div>"
                  , i = f(a)
                  , j = template.compile(i)
                  , k = j({
                    urlDecode: urlDecode,
                    LNG: LNG,
                    G: G,
                    data: b.data,
                    info: b.info
                });
                $(".main").html(g + k),
                $(".main").fadeIn("fast"),
                "fav" == a && Fav.init(c),
                "member" == a && System.init(),
                "theme" == a && h(),
                c = a,
                $("a,img").attr("draggable", "false")
            }
        })
    }
      , h = function() {
        seajs.use("lib/bootstrap-slider/bootstrap-slider.css"),
        seajs.use("lib/colorpicker/css/colorpicker.css"),
        a.async("lib/bootstrap-slider/bootstrap-slider.js", function() {
            $(".control-slider").slider().on("slide", c)
        }),
        a.async("lib/colorpicker/js/colorpicker", function() {
            $(".colorpicker").remove(),
            $(".color-picker").ColorPicker({
                onBeforeShow: function(a) {
                    $(a).attr("input-name", $(this).attr("name")),
                    $(this).ColorPickerSetColor(this.value)
                },
                onShow: function(a) {
                    return $(a).fadeIn(100),
                    !1
                },
                onHide: function(a) {
                    return $(a).fadeOut(100),
                    !1
                },
                onChange: function(a, b, d) {
                    var e = $($(this).data("colorpicker").el);
                    e.val("#" + b),
                    e.parent().find(".btn i").css("background", e.val()),
                    c()
                }
            }).bind("keyup", function() {
                $(this).ColorPickerSetColor(this.value),
                $(this).parent().find(".btn i").css("background", $(this).val())
            }),
            $(".color-picker-view").click(function() {
                $(this).parent().find(".color-picker").click()
            })
        });
        var b = $(".theme-diy-setting");
        b.find("input[name]").unbind("change").bind("change", function() {
            var a = $(this).attr("name");
            "bgType" == a && ($(".theme-bg-type-image,.theme-bg-type-color").addClass("hidden"),
            $(".theme-bg-type-" + $(this).val()).removeClass("hidden")),
            $(this).attr("data-slider-value") || c()
        }),
        b.find(".theme-diy-save").unbind("click").bind("click", function() {
            var a = G.userConfig.themeDIY;
            $.ajax({
                url: G.appHost + "setting/set&k=themeDIY&v=" + urlEncode(jsonEncode(a)),
                dataType: "json",
                success: function(a) {
                    Tips.tips(a)
                }
            })
        }),
        b.find(".color-list").each(function() {
            var a = jsonDecode($(this).attr("data-color"));
            $(this).css("background-image", "linear-gradient(" + a.colorRotate + "deg," + a.startColor + "," + a.endColor + ")")
        }),
        b.find(".color-list").unbind("click").bind("click", function() {
            var a = jsonDecode($(this).attr("data-color"));
            $.each(a, function(a, d) {
                var e = b.find("input[name=" + a + "]");
                "colorRotate" == a ? $("#colorRotate").slider("setValue", parseInt(d)) : (e.val(d),
                e.parent().find(".color-picker-view i").css("background", d)),
                c()
            })
        });
        var c = function() {
            if ("diy" == LocalData.get("theme")) {
                var a = {};
                b.find("input[name]").each(function() {
                    var c = $(this).attr("name")
                      , d = $(this).val();
                    "checkbox" == $(this).attr("type") ? d = Number($(this).is(":checked")) : "radio" == $(this).attr("type") && (d = b.find("[name=" + c + "]:checked").val()),
                    a[c] = d
                }),
                LocalData.setConfig("kodStyleDiy", a),
                core.setSkin("diy"),
                ShareData.frameTop("", function(a) {
                    a.ui.setTheme("diy")
                })
            }
        }
    }
      , i = function() {
        1 != G.isRoot && $("ul.setting #system").remove(),
        G.isRoot || core.authCheck("systemMember.get") || core.authCheck("systemGroup.get") ? $("ul.setting #member").show() : $("ul.setting #member").hide(),
        c = location.hash.split("#", 2)[1],
        g(c),
        $("ul.setting a").click(function() {
            c != $(this).attr("id") && (c = $(this).attr("id"),
            g(c))
        }),
        $("#password-new").keyEnter(function() {
            Setting.tools()
        }),
        $(".setting-user-basic .form-row input").die("change").live("change", function(a) {
            var b = $(this)
              , c = b.attr("name")
              , d = b.val();
            "checkbox" == b.attr("type") && (d = b.prop("checked") ? "1" : "0"),
            j(c, d)
        }),
        $(".path-select").die("click").live("click", function() {
            core.api.pathSelect({
                type: "file",
                title: LNG.path_api_select_image,
                allowExt: "png|jpg|bmp|gif|jpeg|ico|svg|tiff"
            }, function(a) {
                var a = core.path2url(a);
                $(".path-select").parent().find("input[type=text]").val(a).trigger("change"),
                Setting.tools()
            })
        }),
        $(".randomImage").die("click").live("click", function() {
            var a = $(this)
              , b = function(a) {
                var b = G.myDesktop + "wallpage/";
                $.get(G.appHost + "explorer/mkdir&repeat_type=replace&path=" + b, function() {
                    $.get(G.appHost + "explorer/serverDownload&type=download&savePath=" + b + "&url=" + urlEncode(a))
                })
            };
            core.api.randomImage(function(c) {
                a.addClass("moveCircle"),
                a.parent().find("input[type=text]").val(c).trigger("change"),
                1 == $('.box[data-type="wall"]').length && Setting.tools(),
                setTimeout(function() {
                    a.removeClass("moveCircle")
                }, 1e3),
                b(c)
            })
        }),
        $(".box .list").live("hover", function() {
            $(this).addClass("listhover")
        }, function() {
            $(this).toggleClass("listhover")
        }).live("click", function(a) {
            var b = $(this)
              , c = b.parent();
            if (type = c.attr("data-type"),
            value = b.attr("data-value"),
            $(a.target).hasClass("item-remove"))
                return void b.remove();
            switch (-1 != $.inArray(type, ["wall", "theme"]) && (c.find(".this").removeClass("this"),
            b.addClass("this")),
            type) {
            case "wall":
                var e = value;
                -1 == value.indexOf("/") && (e = "./static/images/wall_page/" + value + ".jpg"),
                $("#wallpage-url").val(""),
                ShareData.frameTop("", function(a) {
                    a.ui.setWall(e)
                }),
                j(type, value);
                break;
            case "theme":
                d(value),
                j(type, value)
            }
        }),
        $(".box .list-add").die("click").live("click", function(a) {
            $wallpageAddItem = $(this),
            core.api.pathSelect({
                type: "file",
                title: LNG.path_api_select_image,
                allowExt: "png|jpg|bmp|gif|jpeg",
                single: !1,
                makeUrl: !0,
                firstPath: G.basicPath + "static/images/wall_page/",
                callback: function(a) {
                    var b = "";
                    $.each(a, function() {
                        var a = this.url.replace(G.appRoot, "./");
                        return -1 !== a.indexOf(",") ? void Tips.tips(LNG.error + ": " + a, "error") : $wallpageAddItem.parent().find('[data-value="' + a + '"]').exists() ? void Tips.tips(LNG.path_exists + ": " + a, "warning") : void (b += "<div class='list' data-value='" + a + "'>							<button class='item-remove font-icon icon-remove'></button>							<div class='ico'><img src='" + a + "'/></div>							<div class='info'>" + core.pathThis(a) + "</div>						</div>")
                    }),
                    $(b).insertAfter($wallpageAddItem)
                }
            })
        }),
        $(".wall-login-setting .save,.wall-desktop-setting .save").die("click").live("click", function(a) {
            var b = $(this).parents(".setting-tab").find(".box")
              , c = b.attr("data-type")
              , d = {}
              , e = [];
            $.each(b.find("[data-value]"), function() {
                e.push($(this).attr("data-value"))
            }),
            d[c] = e.join(","),
            $.ajax({
                url: G.appHost + "setting/systemSetting",
                dataType: "json",
                data: "data=" + urlEncode(jsonEncode(d)),
                success: function(a) {
                    if (Tips.tips(a),
                    "wallpageDesktop" == c) {
                        var b = $(".wall-desktop-setting .box").html()
                          , d = "";
                        $(".wall-desktop .box .list.this").exists() && (d = $(".wall-desktop .box .list.this").attr("data-value")),
                        $(".wall-desktop .box").html(b),
                        $(".wall-desktop .box").find(".list-add").remove(),
                        $(".wall-desktop .box").find(".item-remove").remove(),
                        $('.wall-desktop .box [data-value="' + d + '"]').addClass("this")
                    }
                }
            })
        }),
        $(".nav a").live("click", function() {
            $(".nav a").removeClass("this"),
            $(this).addClass("this");
            var a = $(this).attr("data-page")
              , b = $(this).parent().parent();
            b.find(".setting-tab").addClass("hidden"),
            b.find("." + a).removeClass("hidden").hide().fadeIn(200)
        })
    }
      , j = function(a, b) {
        var c = G.appHost + "setting/set&k=" + a + "&v=" + b;
        $.ajax({
            url: c,
            dataType: "json",
            success: function(a) {
                a.code ? Tips.tips(a) : core.authCheck("setting.set") ? Tips.tips(LNG.config_save_error_file, !1) : Tips.tips(LNG.config_save_error_auth, !1)
            }
        })
    }
      , k = function(a) {
        var b = $(".selected").attr("id");
        switch (b) {
        case "user":
            var c = urlEncode($("#password-now").val())
              , d = urlEncode($("#password-new").val());
            if ("" == d || "" == c) {
                Tips.tips(LNG.password_not_null, "error");
                break
            }
            $.ajax({
                url: G.appHost + "user/changePassword&passwordNow=" + c + "&passwordNew=" + d,
                dataType: "json",
                success: function(a) {
                    if (Tips.tips(a),
                    a.code) {
                        var b = ShareData.frameTop();
                        b.location.href = G.appHost + "user/logout"
                    }
                }
            });
            break;
        case "wall":
            var e = $("#wallpage-url").val();
            if ("" == e) {
                Tips.tips(LNG.picture_can_not_null, "error");
                break
            }
            ShareData.frameTop("", function(a) {
                a.ui.setWall(e)
            }),
            $(".box").find(".this").removeClass("this"),
            $.ajax({
                url: G.appHost + "setting/set&k=wall&v=" + urlEncode(e),
                dataType: "json",
                success: function(a) {
                    Tips.tips(a)
                }
            })
        }
    };
    return {
        init: i,
        setGoto: g,
        tools: k,
        setThemeSelf: e,
        setTheme: d
    }
});
;define("app/src/setting/page/about.html", [], '<div class="section">\n	<div class="content">{{@data}}</div>\n</div>\n');
;define("app/src/setting/page/fav.html", [], '<div class="fav setting-tab">\n	<table id=\'list\' align="center" border=0 cellspacing=0 cellpadding=0 ></table>\n	<a href="javascript:void(0);" class=\'add\'><i class="font-icon icon-plus"></i>{{LNG.button_add}}</a>\n</div>\n');
;define("app/src/setting/page/help.html", [], '<div class="section">\n	<div class="content">{{@data}}</div>\n</div>\n');
;define("app/src/setting/page/member.html", [], '<div class="system-content setting-member">\n	<div class="left-frame">\n		<div class="left-header">\n			<div class="tab this" id="system-group">{{LNG.system_group_edit}}</div>\n			<div class="tab" id="system-role">{{LNG.system_group_role}}</div>\n			<div style="clear:both"></div>\n		</div>\n		<div class="left-content system-group">\n			<div id="folder-list-tree"  class="ztree"></div>\n		</div>\n\n		<div class="left-content system-role">\n			<div class="role-box">\n				<ul class="role-list-cell"></ul>\n			</div>\n			<div class="group-role-btn">\n				<a href="javascript:System.systemGroupRole.showBox();">\n					<i class="font-icon icon-bookmark"></i>{{LNG.system_group_role_title}}\n				</a>\n			</div>\n		</div>\n	</div>\n	<!-- left-frame end -->\n\n	<div class="frame-resize"></div>\n\n	<div class="right-frame" id="content-system-group">\n		<div class="header-content">\n			<div class="group-title">\n				<a href="javascript:void(0);" class="group-title-span title-tooltip" title="{{LNG.edit}}" data-action="group-edit">--</a>\n				<span class="label label-info" style="font-size: 12px;">id:<em class="group-id"></em></span>\n				<a href="javascript:void(0);" class="font-icon-label ml-20 title-tooltip" title="{{LNG.system_group_add}}" data-action="group-add-child"><i class="font-icon icon-plus"></i></a>\n\n				<a href="javascript:void(0);" class="font-icon-label title-tooltip" title="{{LNG.open_the_path}}" data-action="group-home" >\n					<i class="font-icon icon-folder-open"></i></a>\n				<span class="group-size">111/1.5</span>\n			</div>\n		</div>\n		<div class="content user-list-content">\n		</div>\n	</div>\n	<!-- content-system-group end -->\n\n	<div class="right-frame" id="content-system-role">\n		<div class="header-content">\n			<div class="group-title">\n				<span class="role_title"></span>\n				<span class="label label-info" style="font-size: 12px;">id:<em class="role-id"></em></span>\n				<a href="javascript:void(0);" class="font-icon-label" data-action="role-delete" ><i class="font-icon icon-trash"></i></a>\n			</div>\n		</div>\n\n		<div class="section group-editor">\n			<div class="together input">\n				<div class="form-row">\n					<div class="title"><i>{{LNG.group_name}}</i></div>\n					<input type="text" id=\'name\' data-before=""/>\n					<a href="javascript:;" class="button warning" \n						title=\'{{LNG.group_tips}}\' title-timeout="100"><i class="icon-warning-sign"></i>{{LNG.tips}}!</a>\n					<div style="clear:both;"></div>\n				</div>\n				<div class="form-row">\n					<div class="title"><i>{{LNG.group_role_ext}}</i></div>\n					<input type="text" id=\'extNotAllow\' \n					default=\'htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm\' \n					value  ="htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm"/>\n					<a href="javascript:;" class="button warning path_ext_tips" \n						title=\'{{LNG.group_role_ext_warning}}\' title-timeout="100"><i class="icon-warning-sign"></i>{{LNG.tips}}!</a>\n					<div style="clear:both;"></div>\n				</div>\n			</div>\n			<div class="together">\n				<div class="title" style="height:75px"><i>{{LNG.group_role_file}}</i></div>\n				<div class="tagdiv">\n					<a class="tag" href="javascript:;" data-role=\'explorer.mkfile;app.userApp\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_mkfile}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.mkdir\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_mkdir}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathRname\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathrname}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathDelete\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathdelete}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathInfo;explorer.pathInfoMuti\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathinfo}}</span>\n					</a>\n\n					<a class="tag" href="javascript:;" data-role=\'explorer.pathCopy;explorer.pathCute;explorer.pathCuteDrag;explorer.clipboard;explorer.pathPast\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_pathmove}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.zip\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_zip}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.unzip\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_unzip}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'explorer.search\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_search}}</span>\n					</a>\n					<a class="tag" href="javascript:;" data-role=\'editor.fileSave\'>\n						<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n						<span>{{LNG.group_role_filesave}}</span>\n					</a>\n					<div style="clear:both;"></div>\n				</div>\n				<div style="clear:both;"></div>\n			</div>\n			<div class="together">\n				<div class="title"><i>{{LNG.group_role_can_upload}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'explorer.fileUpload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_upload}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'explorer.serverDownload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_download}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'explorer.fileDownload\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_fileDownload}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'userShare.set;userShare.del\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_share}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together">\n				<div class="title"><i>{{LNG.group_role_config}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'user.changePassword\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_passowrd}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'setting.set\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_config}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'fav.edit;fav.add;fav.del\'>\n					<input type="checkbox" id="23" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.group_role_fav}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together combox">\n				<div class="title"><i>{{LNG.system_member_action}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_list}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.add\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_add}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.edit\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_edit}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemMember.doAction\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_del}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n			<div class="together combox">\n				<div class="title"><i>{{LNG.system_group_action}}</i></div>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_list}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.add\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_add}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.edit\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_edit}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'systemGroup.del\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG.action_del}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="together combox">\n				<div class="title"><i>{{LNG.PluginCenter}}</i></div>\n				<a class="tag" href="javascript:;" \n					data-role=\'pluginApp.index;pluginApp.appList\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.viewList\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.setConfig;systemMember.get;systemGroup.get;systemRole.get\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.setting\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.changeStatus;\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.status\']}}</span>\n				</a>\n				<a class="tag" href="javascript:;" data-role=\'pluginApp.install;pluginApp.unInstall\'>\n					<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n					<span>{{LNG[\'Plugin.auth.install\']}}</span>\n				</a>\n				<div style="clear:both;"></div>\n			</div>\n\n			<div class="form-row form-row-submit">\n				<div class="setting-content">\n					<button class="btn btn-primary role-save-button" data-action="role-edit-save">{{LNG.button_save_submit}}</button>\n					<button class="btn btn-link revert" data-action="revert-all">{{LNG.button_select_all}}</button>\n				</div>\n			</div>\n		</div>\n\n	</div>\n	<!-- content-system-role end -->\n</div>\n</div><!-- 父元素结束 -->\n\n\n');
;define("app/src/setting/page/system.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="system-setting">{{LNG.system_setting}}</a>\n	<a href="javascript:;" class="" data-page="setting-safe">{{LNG.system_setting_save}}</a>\n	<a href="javascript:;" class="" data-page="setting-menu">{{LNG.system_setting_menu}}</a>\n	<a href="javascript:;" class="" data-page="setting-system-others">{{LNG.others}}</a>\n	<div style="clear:both;"></div>\n</div>\n\n{{if  G.isRoot}}\n	<div class="setting-tools-right">\n		{{if kod.window.core.versionType !="A"}}\n			<button class="fl-right btn btn-default btn-sm system-setting-more">{{LNG.more}}</button>\n		{{/if}}\n\n		{{if verIndex={"A":"free","O":"1","P":"2","Q":"3","R":"4","S":"5","T":"6"} }}{{/if}}\n		{{if verKey = "version_vip_"+verIndex[kod.window.core.versionType] }}{{/if}}\n		<span class="version-vip" id="{{verKey}}"><i class="font-icon icon-key"></i>{{LNG[verKey]}}</span>\n	</div>\n{{/if}}\n\n\n<div class="setting-tab system-setting form-box">\n	<div class="panel-body">\n		<div class="form-row item-systemName">\n			<div class=\'setting-title\'>{{LNG.system_name}}:</div>\n			<div class="setting-content">\n				<input type="text" name="systemName" value="{{data.systemName | kod.window.htmlEncode}}" />\n				<i class="desc">{{LNG.system_name_desc}}</i>\n				<button  class="btn btn-default btn-sm" style="margin-left:20px;" onclick="core.update();">{{LNG.check_update}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-systemDesc">\n			<div class=\'setting-title\'>{{LNG.system_desc | kod.window.htmlEncode}}:</div>\n			<div class="setting-content">\n				<input type="text" name="systemDesc" value="{{data.systemDesc || ""}}" />\n				<i class="desc">{{LNG.system_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-pathHidden">\n			<div class=\'setting-title\'>{{LNG.path_hidden}}:</div>\n			<div class="setting-content">\n				<input type="text" name="pathHidden" value="{{data.pathHidden || ""}}" />\n				<i class="desc">{{LNG.path_hidden_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-newUserFolder">\n			<div class=\'setting-title\'>{{LNG.new_user_folder}}:</div>\n			<div class="setting-content">\n				<input type="text" name="newUserFolder" value="{{data.newUserFolder || ""}}" />\n				<i class="desc">{{LNG.new_user_folder_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-newUserApp">\n			<div class=\'setting-title\'>{{LNG.new_user_app}}:</div>\n			<div class="setting-content">\n				<input type="text" name="newUserApp" value="{{data.newUserApp || ""}}"/>\n				<i class="desc">{{LNG.new_user_app_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row item-autoLogin">\n			<div class=\'setting-title\'>{{LNG.auto_login}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="autoLogin" \n					{{if data.autoLogin==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i style="width:450px;">{{@LNG.auto_login_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-firstIn">\n			<div class=\'setting-title\'>{{LNG.first_in}}:</div>\n			<div class="setting-content">\n				<label><input type="radio" name="firstIn" value="desktop" class="kui-radio"\n					{{if data.firstIn==\'desktop\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_desktop}}</span>\n				</label>\n				<label><input type="radio" name="firstIn" value="explorer" class="kui-radio"\n					{{if data.firstIn==\'explorer\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_explorer}}</span>\n				</label>\n				<label><input type="radio" name="firstIn" value="editor"  class="kui-radio"\n					{{if data.firstIn==\'editor\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.ui_editor}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n\n	<div class="alert alert-warning hidden check-evn-error can-select can-right-menu" role="alert">\n		<a href="#" class="close" data-dismiss="alert">&times;</a>\n		<div class="pl-10">\n			<h3>{{LNG.php_env_error}}<a href="javascript:;" class="button warning phpinfo"><i class="icon-warning-sign"></i>phpinfo</a></h3>\n			<div class="error-content"></div>\n		</div>\n	</div>\n</div>\n\n\n\n<div class="setting-tab setting-safe form-box hidden">\n	<div class="panel-body">\n		<div class="form-row item-needCheckCode">\n			<div class=\'setting-title\'>{{LNG.need_check_code}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big"\n					 name="needCheckCode" {{if data.needCheckCode==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i>{{LNG.need_check_code_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-csrfProtect">\n			<div class=\'setting-title\'>{{LNG.setting_csrf_protect}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="csrfProtect" {{if data.csrfProtect==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i>{{LNG.setting_csrf_protect_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="line"></div>\n		<div class="form-row item-basedir">\n			<div class=\'setting-title\'>{{LNG.system_setting_root_path}}:</div>\n			<div class="setting-content can-select can-right-menu">\n				<i>{{LNG.system_setting_root_path_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n\n<div class="setting-tab setting-menu form-box hidden">\n	<table id="list" align="center" border="0" cellspacing="0" cellpadding="0">\n		<tbody>\n		<tr class="title">\n			<td width="10%">{{LNG.menu_name}}</td>\n			<td>{{LNG.url_path}}<span>({{LNG.url_path_desc}})</span></td>\n			<td>{{LNG.menu_sub_menu}}</td>\n			<td>{{LNG.action}}</td>\n		</tr>\n\n		{{if data.menu.push({\'name\':\'\',\'type\':\'\',\'url\':\'\',\'target\':\'_blank\',\'use\':\'1\',\'subMenu\':0}) }}{{/if}}\n		{{each data.menu value key}}\n		{{if menuSystem = value[\'type\'] == \'system\' ? \'menuSystem\':\'\'}}{{/if}}\n		{{if menuShow = value[\'use\']  == \'1\' ? \'menu-show\':\'menu-hidden\'}}{{/if}}\n		{{if menuAdd = value[\'name\']  == \'\' ? \'menu-default hidden\':\'\'}}{{/if}}\n		<tr class="menu-list {{menuSystem}} {{menuShow}} {{menuAdd}}">\n			<td class="name"><input type="text" name="name" value="{{value.name | menuInfoDecode}}"/>\n				<span>{{if LNG[\'ui_\'+value[\'name\']]}} {{LNG[\'ui_\'+value[\'name\']]}} {{else}} null {{/if}}</span>\n			</td>\n			<td class="url">\n				<input type="text" name="url" value="{{value.url | menuInfoDecode}}">\n				<span>{{value.name}}</span>\n				<label>\n					<input type="checkbox" name="target" class="kui-checkbox size-small" value="{{value.target}}"\n					{{if value.target==\'_blank\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.menu_open_window}}</span>\n				</label>\n			</td>\n			<td>\n				<label>\n					<input type="checkbox" name="subMenu" class="kui-checkbox size-small" value="{{value.subMenu}}"\n					{{if value.subMenu==\'1\'}}checked="checked"{{/if}}/>\n				</label>\n			</td>\n			<td class="action">\n				<button class=\'btn btn-default btn-sm move-up\'><i class="font-icon icon-arrow-up"></i></button>\n				<button class=\'btn btn-default btn-sm move-down\'><i class="font-icon icon-arrow-down"></i></button>\n				<button class=\'btn btn-default btn-sm move-hidden\'>\n					{{if value.use==\'1\'}} {{LNG.menu_hidden}} {{else}} {{LNG.menu_show}} {{/if}}\n				</button>\n				<button class=\'btn btn-default btn-sm move-del\'>{{LNG.menu_move_del}}</button>\n			</td>\n		</tr>\n		{{/each}}\n		</tbody>\n	</table>\n	\n	<a href="javascript:void(0)" class="add system-menu-add">\n		<i class="icon-plus pr-10"></i>{{LNG.button_add}}\n	</a>\n\n	<div class="form-row form-row-submit mt20">\n		<div class="setting-content">\n			<button class="btn btn-primary system-menu-save">{{LNG.button_save}}</button>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n\n\n<div class="setting-tab setting-system-others form-box hidden">\n	<div class="panel-body">\n		<div class="form-row item-rootListUser">\n			<div class=\'setting-title\'>{{LNG.setting_show_share_user}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" \n						name="rootListUser" {{if data.rootListUser==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i class="">{{LNG.setting_show_share_user_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		{{if kod.window.core.versionType !="A"}}\n		<div class="form-row item-rootListGroup">\n			<div class=\'setting-title\'>{{LNG.setting_show_root_group}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="checkbox" class="kui-checkbox-ios size-big" \n						name="rootListGroup" {{if data.rootListGroup==\'1\'}}checked="checked"{{/if}} /><em></em>\n					<i class="">{{LNG.setting_show_root_group_desc}}</i>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		{{/if}}\n\n		<div class="line"></div>		\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.action}}:</div>\n			<div class="setting-content">\n				<button class="btn btn-warning mr-20 mb-10" system-tools="clearCache">{{LNG.setting_clear_cache}}</button>\n				<button class="btn btn-warning mr-20 mb-10" system-tools="clearUserRecycle">{{LNG.setting_clear_user_recycle}}</button>\n				<!-- <button class="btn btn-warning mr-20" system-tools="clearSession">清空session</button> -->\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row item-globalIcp">\n			<div class=\'setting-title\'>{{LNG.setting_icp}}:</div>\n			<div class="setting-content">\n				<input type="text" name="globalIcp" value="{{data.globalIcp || ""}}" />\n				<i class="desc"></i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-globalCss">\n			<div class=\'setting-title\'>{{LNG.setting_global_css}}:</div>\n			<div class="setting-content">\n				<textarea name="globalCss">{{data.globalCss || ""}}</textarea>\n				<i class="desc">{{LNG.setting_global_css_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row item-globalHtml">\n			<div class=\'setting-title\'>{{LNG.setting_global_html}}:</div>\n			<div class="setting-content">\n				<textarea name="globalHtml">{{data.globalHtml || ""}}</textarea>\n				<i class="desc">{{LNG.setting_global_html_desc}}</i>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button class="btn btn-primary setting-save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n\n</div>\n');
;define("app/src/setting/page/theme.html", [], '<div class="section">\n	<div class=\'box\' data-type="theme">\n	{{each data.settingAll.themeall.split(\',\')  value key}}\n	<div class=\'{{if value==data.user.theme}}this{{/if}} list\' data-value=\'{{value}}\'>\n		<div class=\'theme ico\'><img src=\'{{G.staticPath}}images/thumb/theme/{{value}}.png\'/></div>\n		<div class=\'info\'>{{@LNG[\'theme_\'+value]}}</div>\n	</div>\n	{{/each}}\n\n	{{each data.settingAll.themeall.split(\',\')  value key}}\n	<div class=\'flex-list\'></div>\n	{{/each}}\n	\n	<div style="clear:both;"></div>\n	</div>\n</div>\n\n{{if config = G.userConfig.themeDIY}}{{/if}}\n<div class="theme-diy-setting panel panel-default {{if G.userConfig.theme!=\'diy\'}}hidden{{/if}} form-box" >\n	<div class="panel-heading"><h3 class="panel-title">{{LNG.theme_diy_title}}</h3></div>\n	<div class="panel-body">\n		<div class="form-row theme-bg-type">\n			<div class=\'setting-title\'>{{LNG.theme_diy_background}}:</div>\n			<div class="setting-content">\n				<label><input type="radio" class="kui-radio" name="bgType" value="image" \n					{{if config.bgType == \'image\'}}checked="checked"{{/if}} />\n					<span>{{LNG.theme_diy_image}}</span>\n				</label>\n				<label><input type="radio" class="kui-radio" name="bgType" value="color" \n					{{if config.bgType == \'color\'}}checked="checked"{{/if}} />\n					<span>{{LNG.theme_diy_color_blur}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="theme-bg-type-image {{if config.bgType != \'image\'}}hidden{{/if}}">\n			<div class="form-row theme-bg-blur">\n				<div class=\'setting-title\'>{{LNG.theme_diy_image_blur}}:</div>\n				<div class="setting-content">\n					<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="bgBlur"  {{if config.bgBlur==\'1\'}}checked="checked"{{/if}}/><em></em>\n					</label>\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row theme-bg-image">\n				<div class=\'setting-title\'>{{LNG.theme_diy_image_url}}:</div>\n				<div class="setting-content file-select-input">\n					<input type="text" name="bgImage" value="{{config.bgImage}}" style="width: 80%;" /> \n					<button class="path-select btn btn-default input-btn-right">\n						<i class="font-icon icon-folder-open"></i>\n					</button>\n					<img class="randomImage" src="{{G.staticPath+\'images/common/desktop/fengche.png\'}}" title="{{LNG.setting_wall}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n		</div>\n\n		<div class="theme-bg-type-color {{if config.bgType != \'color\'}}hidden{{/if}}">\n			<div class="form-row form-color">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_start}}:</div>\n				<div class="setting-content">\n					<input type="text" name="startColor" class="color-picker" value="{{config.startColor}}"/>\n					<button class="btn btn-default color-picker-view input-btn-right">\n						<i style="background:{{config.startColor}}"></i>\n					</button>\n					<i class="desc">&nbsp;</i>				\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row form-color">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_end}}:</div>\n				<div class="setting-content">\n					<input type="text" name="endColor" class="color-picker" value="{{config.endColor}}"/>\n					<button class="btn btn-default color-picker-view input-btn-right">\n						<i style="background:{{config.endColor}}"></i>\n					</button>\n					<i class="desc">&nbsp;</i>\n				</div>\n				<div class="clear"></div>\n			</div>\n			<div class="form-row ">\n				<div class=\'setting-title\'>{{LNG.theme_diy_color_radius}}:</div>\n				<div class="setting-content">\n					<input type="text" name="colorRotate" class="control-slider"\n					data-slider-min="0"\n					data-slider-max="360"\n					data-slider-step="1"\n					data-slider-value="{{config.colorRotate}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n\n			<div class="color-default">\n				<div class="color-list" data-color=\'{"startColor":"#93ad34","endColor":"#198a62","colorRotate":"310"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#5648c1","endColor":"#6fe3e7","colorRotate":"160"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#7b4397","endColor":"#2b85a6","colorRotate":"300"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#860073","endColor":"#4f1670","colorRotate":"300"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#248556","endColor":"#16226e","colorRotate":"165"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#d16645","endColor":"#13052e","colorRotate":"195"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#d23c39","endColor":"#dca74a","colorRotate":"320"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#7f7280","endColor":"#000000","colorRotate":"160"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#77cfa0","endColor":"#0c2b50","colorRotate":"330"}\'></div>\n				<div class="color-list" data-color=\'{"startColor":"#29c0db","endColor":"#1178c2","colorRotate":"300"}\'></div>\n			</div>\n		</div>\n\n		<!-- 提交 -->\n		<div class="form-row">\n			<div class=\'setting-title\'></div>\n			<div class="setting-content">\n				<button class="theme-diy-save btn btn-primary">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n	</div>\n</div>\n');
;define("app/src/setting/page/user.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="setting-user-basic">{{LNG.setting_basic}}</a>\n	<a href="javascript:;" class="" data-page="setting-user-password">{{LNG.setting_password}}</a>\n	<div style="clear:both;"></div>\n</div>\n\n<div class="setting-tab setting-user-basic form-box">\n	<div class="panel-body">\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.recycle_open_if}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="recycleOpen"\n					 {{if data.user.recycleOpen==\'1\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_recycle_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_animate_open}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="animateOpen"\n					 {{if data.user.animateOpen !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_animate_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_sound_open}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="soundOpen"\n					 {{if data.user.soundOpen ==\'1\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_sound_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.upload_exist}}:</div>\n			<div class="setting-content">\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="rename" {{if data.user.fileRepeat==\'rename\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_rename}}</span>\n				</label>\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="replace" {{if data.user.fileRepeat==\'replace\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_replace}}</span>\n				</label>\n				<label>\n					<input type="radio" class="kui-radio" name="fileRepeat" value="skip" {{if data.user.fileRepeat==\'skip\'}}checked="checked"{{/if}}/>\n					<span>{{LNG.upload_exist_skip}}</span>\n				</label>\n				<div style="clear:both"></div>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="line"></div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_imageThumb}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="imageThumb"\n					 {{if data.user.imageThumb !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_imageThumb_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_user_fileSelect}}:</div>\n			<div class="setting-content">\n				<label class="disable-ripple">\n					<input type="checkbox" class="kui-checkbox-ios size-big" name="fileSelect"\n					 {{if data.user.fileSelect !=\'0\'}}checked="checked"{{/if}}/><em></em>\n					<span class=\'desc\'>{{LNG.setting_user_fileSelect_desc}}</span>\n				</label>\n			</div>\n			<div class="clear"></div>\n		</div>\n\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<!-- <button class="btn btn-primary save disabled">{{LNG.button_save}}</button> -->\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n\n\n<div class="setting-tab setting-user-password hidden form-box">\n	<div class="panel-body">\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_password_old}}:</div>\n			<div class="setting-content"><input type="password" id="password-now"value="" /></div>\n			<div class="clear"></div>\n		</div>\n\n		<div class="form-row">\n			<div class=\'setting-title\'>{{LNG.setting_password_new}}:</div>\n			<div class="setting-content"><input type="password" id="password-new" value=""/></div>\n			<div class="clear"></div>\n		</div>\n\n\n		<!-- 提交 -->\n		<div class="form-row form-row-submit">\n			<div class="setting-content">\n				<button onclick="Setting.tools();" class="btn btn-primary save">{{LNG.button_save}}</button>\n			</div>\n			<div class="clear"></div>\n		</div>\n	</div>\n</div>\n');
;define("app/src/setting/page/wall.html", [], '<div class="nav">\n	<a href="javascript:;"  class="this" data-page="wall-desktop">{{LNG.setting_wall_desktop}}</a>\n	{{if G.isRoot}}\n		<a href="javascript:;" class="" data-page="wall-desktop-setting">{{LNG.setting_wall_desktop_list}}</a>\n		<a href="javascript:;" class="" data-page="wall-login-setting">{{LNG.setting_wall_login_list}}</a>\n	{{/if}}\n	<div style="clear:both;"></div>\n</div>\n\n\n<div class="setting-tab wall-desktop mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wall">\n			{{each data.wallpageDesktop.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'{{if value==data.user.wall}}this{{/if}} list\' data-value=\'{{value}}\'>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\')  value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n	<div class="panel panel-default form-box">\n		<div class="panel-heading"><h3 class="panel-title">{{LNG.setting_wall_diy}}</h3></div>\n		<div class="panel-body">\n			<div class="form-row theme-bg-image">\n				<div class=\'setting-title\'>URL:</div>\n				<div class="setting-content file-select-input">\n					<input type="text" id="wallpage-url" style="width:80%;" {{if data.user.wall.length>3}}value="{{data.user.wall}}"{{/if}}/> \n					<button class="path-select btn btn-default input-btn-right">\n						<i class="font-icon icon-folder-open"></i>\n					</button>\n					<img class="randomImage" src="{{G.staticPath+\'images/common/desktop/fengche.png\'}}" title="{{LNG.setting_wall}}"/>\n				</div>\n				<div class="clear"></div>\n			</div>\n\n			<!-- 提交 -->\n			<div class="form-row">\n				<div class=\'setting-title\'></div>\n				<div class="setting-content">\n					<button onclick="Setting.tools();" class="btn btn-primary mb-20">{{LNG.button_save}}</button>\n				</div>\n				<div class="clear"></div>\n			</div>\n		</div>\n	</div>\n</div>\n\n\n<div class="setting-tab wall-desktop-setting form-box hidden mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wallpageDesktop">\n			<div class=\'list list-add\'>\n				<i class="font-icon icon-plus-sign"></i><br/>{{LNG.button_add}}\n			</div>\n			{{each data.wallpageDesktop.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'list\' data-value=\'{{value}}\'>\n				<button class=\'item-remove font-icon icon-remove\'></button>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\')  value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n\n	<!-- 提交 -->\n	<div class="form-row form-row-submit">\n		<div class="setting-content">\n			<button class="btn btn-primary save">{{LNG.button_save}}</button>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n<div class="setting-tab wall-login-setting hidden form-box mt-20">\n	<div class="section">\n		<div class=\'box\' data-type="wallpageLogin">\n			<div class=\'list list-add\'>\n				<i class="font-icon icon-plus-sign"></i><br/>{{LNG.button_add}}\n			</div>\n			{{each data.wallpageLogin.split(\',\')  value key}}\n			{{if value}}\n			<div class=\'list\' data-value=\'{{value}}\'>\n				<button class=\'item-remove font-icon icon-remove\'></button>\n				{{if value.indexOf(\'/\')== -1}}\n				<div class=\'ico\'><img src=\'./static/images/wall_page/{{value}}.jpg\'/></div>\n				{{else}}\n				<div class=\'ico\'><img src=\'{{value}}\'/></div>\n				{{/if}}\n				<div class="info">{{value | kod.core.pathThis}}</div>\n			</div>\n			{{/if}}\n			{{/each}}\n			{{each \'1,1,1,1,1,1,1\'.split(\',\') value key}}<div class=\'flex-list\'></div>{{/each}}\n			<div style="clear:both;"></div>\n		</div>\n	</div>\n\n	<!-- 提交 -->\n	<div class="form-row form-row-submit">\n		<div class="setting-content">\n			<button class="btn btn-primary save">{{LNG.button_save}}</button>\n			<a href="./?user/login" target="_blank" class="pl-10 pr-10">预览</a>\n			<em>{{LNG.setting_wall_login_tips}}</em>\n		</div>\n		<div class="clear"></div>\n	</div>\n</div>\n\n');
;define("app/src/setting/system/systemSetting", [], function(a, b) {
    var c = function() {
        $("input[name='firstIn']").live("click", function() {
            $("input[name='firstIn']").removeAttr("checked"),
            $(this).attr("checked", "checked")
        }),
        $(".setting-save").die("click").live("click", function() {
            var a = {};
            $(this).parents(".setting-tab").find(".form-row [name]").each(function() {
                var b = $(this)
                  , c = b.attr("name");
                "checkbox" == b.attr("type") ? a[c] = void 0 == b.attr("checked") ? "0" : "1" : "radio" == b.attr("type") ? a[c] = $("[name=" + c + "]:checked").val() : a[c] = urlEncode(b.val())
            }),
            g(a)
        }),
        $(".system-setting-more").die("click").live("click", function() {
            if (G.isRoot) {
                var a = G.basicPath + "config/setting_user.php"
                  , b = ShareData.frameTop();
                if ("undefined" != typeof b.Editor)
                    return void b.Editor.add(urlEncode(a));
                if (ShareData.frameTop("OpenopenEditor")) {
                    var c = b.$.dialog.list.openEditor
                      , d = 0;
                    c && ("hidden" == $("." + c.config.id).css("visibility") && (d = 200),
                    c.display(!0).zIndex().focus()),
                    setTimeout(function() {
                        ShareData.frameTop("OpenopenEditor", function(b) {
                            b.Editor.add(urlEncode(a))
                        })
                    }, d)
                } else {
                    var e = G.appHost + "editor/edit#filename=" + urlEncode(a);
                    core.openDialog(e, core.icon("edit"), htmlEncode(a), "openEditor")
                }
            }
        }),
        d(),
        e(),
        f()
    }
      , d = function() {
        $(".phpinfo").die("click").live("click", function() {
            $.dialog.open(G.appHost + "setting/phpInfo&accessToken=" + G.accessToken, {
                title: "php_info",
                width: "70%",
                height: "65%",
                resize: !0
            })
        }),
        $.get(G.appHost + "setting/slider&slider=system&env_check=1", function(a) {
            if (a && "" != a.data) {
                Tips.tips(a.data, "warning");
                var b = $(".check-evn-error");
                b.removeClass("hidden"),
                b.find(".error-content").html(a.data)
            }
        })
    }
      , e = function() {
        $('.setting-menu .menu-list input[name="target"]').live("click", function() {
            "_blank" == $(this).val() ? ($(this).val("_self"),
            $(this).removeAttr("checked")) : ($(this).val("_blank"),
            $(this).attr("checked", "checked"))
        }),
        $(".setting-menu .system-menu-add").die("click").live("click", function() {
            var a = $(".menu-default").clone().removeClass("menu-default hidden").addClass("menu-list");
            a.insertAfter(".setting-menu .menu-list:last")
        }),
        $(".setting-menu .menu-list .move-up").die("click").live("click", function() {
            var a = $(this).parent().parent();
            a.prev().hasClass("menu-list") && a.insertBefore(a.prev())
        }),
        $(".setting-menu .menu-list .move-down").die("click").live("click", function() {
            var a = $(this).parent().parent();
            a.next().hasClass("menu-list") && a.insertAfter(a.next())
        }),
        $(".setting-menu .menu-list .move-hidden").die("click").live("click", function() {
            var a = $(this).parent().parent();
            a.hasClass("menu-hidden") ? (a.removeClass("menu-hidden"),
            $(this).text(LNG.menu_hidden)) : (a.addClass("menu-hidden"),
            $(this).text(LNG.menu_show))
        }),
        $(".setting-menu .menu-list .move-del").die("click").live("click", function() {
            var a = $(this).parent().parent();
            a.remove()
        }),
        $(".system-menu-save").die("click").live("click", function() {
            var a = [];
            $(".setting-menu .menu-list").each(function() {
                var b = $(this)
                  , c = {};
                b.hasClass("menu-default") || (b.find("input").each(function() {
                    var a = $(this).attr("value");
                    "checkbox" == $(this).attr("type") && (a = Number($(this).prop("checked"))),
                    "target" == $(this).attr("name") && a && (a = "_blank"),
                    c[$(this).attr("name")] = urlEncode(a)
                }),
                "" != c.name && (c.use = "1",
                c.type = "",
                b.hasClass("menu-hidden") && (c.use = "0"),
                b.hasClass("menu-system") && (c.type = "system"),
                a.push(c)))
            }),
            g({
                menu: a
            })
        })
    }
      , f = function() {
        $("[system-tools]").die("click").live("click", function() {
            var a = $(this)
              , b = a.attr("system-tools")
              , c = htmlRemoveTags(a.html());
            a.addClass("disabled").html(LNG.loading),
            Tips.loading(LNG.loading),
            $.ajax({
                url: G.appHost + "setting/systemTools&action=" + b,
                dataType: "json",
                error: function(b, d, e) {
                    core.ajaxError(b, d, e),
                    Tips.close(LNG.error, !1),
                    a.removeClass("disabled").html(c)
                },
                success: function(b) {
                    Tips.close(b),
                    setTimeout(function() {
                        a.removeClass("disabled").html(c)
                    }, 300)
                }
            })
        })
    }
      , g = function(a) {
        $.ajax({
            url: G.appHost + "setting/systemSetting",
            type: "POST",
            data: "accessToken=" + G.accessToken + "&data=" + urlEncode(jsonEncode(a)),
            dataType: "json",
            success: function(a) {
                Tips.tips(a)
            }
        })
    };
    1 == G.isRoot && c()
});
;define("app/src/setting/system/system", ["lib/contextMenu/jquery-contextMenu", "lib/ztree/ztree", "./systemMember", "./tpl/userList.html", "./tpl/user.html", "./tpl/userImport.html", "./tpl/groupSelect.html", "./systemGroup", "./tpl/group.html", "./systemRole", "./systemGroupRole", "./tpl/groupRoleSetting.html"], function(a, b) {
    a("lib/contextMenu/jquery-contextMenu"),
    a("lib/ztree/ztree");
    var c = a("./systemMember")
      , d = a("./systemGroup")
      , e = a("./systemRole")
      , f = a("./systemGroupRole")
      , g = function() {
        h("system-group"),
        i(),
        f.init(function() {
            e.init(),
            d.init()
        })
    }
      , h = function(a) {
        $(".system-content .this").removeClass("this"),
        $(".system-content #" + a).addClass("this"),
        $(".left-content").addClass("hidden"),
        $("." + a).removeClass("hidden"),
        $(".right-frame").addClass("hidden"),
        $("#content-" + a).removeClass("hidden")
    }
      , i = function() {
        $(".left-header .tab").die("click").live("click", function() {
            var a = $(this).attr("id");
            h(a)
        });
        var a = $(".system-content .frame-resize")
          , b = $(".system-content .left-frame").width();
        a.drag({
            start: function() {
                a.addClass("active"),
                b = $(".system-content .left-frame").width()
            },
            move: function(c, d) {
                var e = b + c;
                e = 10 >= e ? 10 : e >= 500 ? 500 : e,
                $(".system-content .left-frame").css("width", e),
                $(".system-content .right-frame").css("left", e),
                a.css("left", e)
            },
            end: function(b, c) {
                a.removeClass("active")
            }
        })
    }
      , j = function(a) {
        a.each(function() {
            var a = core.userSpaceHtml($(this).html());
            $(this).html(a)
        })
    }
      , k = function(a) {
        var b = G.userPath + a.path + "/home/";
        a.groupID && (b = G.groupPath + a.path + "/home/"),
        a.homePath && (b = a.homePath),
        window.parent && window.parent.core && window.parent.core.isApp("explorer") ? ShareData.frameTop("", function(a) {
            a.$.artDialog.list.setting_mode.display(!1),
            a.Tips.loading(LNG.loading),
            setTimeout(function() {
                a.ui.path.list(b),
                a.Tips.close(LNG.system_open_true_path, !0)
            }, 200)
        }) : core.explorer(b)
    };
    return {
        init: g,
        sizeUse: j,
        openPath: k,
        systemMember: c,
        systemGroup: d,
        systemRole: e,
        systemGroupRole: f
    }
});
;;!function($) {
    !function($, n, i, t, r, o, e, c, a, E, u, f, s, G, v, d, p, K, h, l, J, A, L, O, k, b, _, C, g, m, y, X, N, R, D, T, S, U, P, q, Q, V, F, M, w, B, H, I, x, W, Y, Z, z, j, $n, nn, tn, rn, on, en, cn, an, En, un, fn, sn, Gn, vn, dn, pn, Kn, hn, ln, Jn, An, Ln, On, kn, bn, _n, Cn, gn, mn, yn, Xn, Nn, Rn, Dn, Tn, Sn, Un, Pn, qn, Qn, Vn, Fn, Mn, wn, Bn, Hn, In, xn, Wn, Yn, Zn, zn, jn, $i, ni, ii, ti, ri, oi, ei, ci, ai, Ei, ui, fi, si, Gi, vi, di, pi, Ki, hi, li, Ji, Ai, Li, Oi, ki, bi, _i, Ci, gi, mi, yi, Xi, Ni, Ri, Di, Ti, Si, Ui, Pi, qi, Qi, Vi, Fi, Mi, wi, Bi, Hi, Ii, xi, Wi, Yi, Zi, zi, ji, $t, nt, it, tt, rt, ot, et, ct, at, Et, ut, ft, st, Gt, vt, dt, pt, Kt, ht, lt, Jt, At, Lt, Ot, kt, bt, _t, Ct, gt, mt, yt, Xt, Nt, Rt, Dt, Tt, St, Ut, Pt, qt, Qt, Vt, Ft, Mt, wt, Bt, Ht, It, xt, Wt, Yt, Zt, zt, jt, $r, nr, ir, tr, rr, or, er, cr, ar, Er, ur, fr, sr, Gr, vr, dr, pr, Kr, hr, lr, Jr, Ar, Lr, Or, kr, br, _r, Cr, gr, mr, yr, Xr, Nr, Rr, Dr, Tr, Sr, Ur, Pr, qr, Qr, Vr, Fr, Mr, wr, Br, Hr, Ir, xr, Wr, Yr, Zr, zr, jr, $o, no, io, to, ro, oo, eo, co, ao, Eo, uo, fo, so, Go, vo, po, Ko, ho, lo, Jo, Ao, Lo, Oo, ko, bo, _o, Co, go) {
        $[i](t, [r, o, e, c], function(n) {
            var i, t, mo = function(n) {
                return void a != i ? void yo(n) : void $[u][E]({
                    url: $[s][f] + G,
                    dataType: v,
                    success: function(t) {
                        return t[d] ? (i = $[K][p](t, h),
                        void yo(n)) : void $[J][l](t)
                    },
                    error: function() {
                        return !A
                    }
                })
            }, yo = function(o) {
                (L == o || void a == o) && (o = t),
                t = o;
                var e = n(r)
                  , c = $[k][O](e)
                  , E = c({
                    LNG: $[b],
                    selectGroup: o,
                    userList: i,
                    groupRoleList: $[g][C][_](),
                    groupList: $[g][m][_](),
                    roleList: $[g][y][_]()
                });
                $[u](N)[X](E),
                $[u](D)[R](T),
                $[g][S]($[u](U))
            }, Xo = function(n, r, o) {
                if (void a != r) {
                    P != typeof r && (r = [r]);
                    var e = {
                        del: $[b][q],
                        roleSet: $[b][Q],
                        groupRemoveFrom: $[b][V]
                    }
                      , c = function() {
                        $[u][E]({
                            url: $[s][f] + F + n,
                            type: M,
                            data: w + $[B](r) + H + o,
                            dataType: v,
                            beforeSend: function() {
                                $[J][I]()
                            },
                            error: $[K][x],
                            success: function(n) {
                                $[J][W](n),
                                $[u][Z][Y][z] && $[u][Z][Y][z][W](),
                                i = void a,
                                mo(t)
                            }
                        })
                    };
                    e[n] ? $[u][Z]({
                        id: j,
                        fixed: !a,
                        icon: $n,
                        padding: nn,
                        width: tn,
                        lock: !a,
                        background: rn,
                        opacity: on,
                        content: e[n],
                        ok: function() {
                            c()
                        },
                        cancel: !a
                    }) : c()
                }
            }, No = en, Ro = function($) {
                Po(To($))
            }, Do = function($) {
                Po(To($), !a)
            }, To = function($) {
                var n = {
                    1: No
                };
                return n[$] = No,
                {
                    userID: L,
                    name: L,
                    password: cn,
                    role: an,
                    groupInfo: n,
                    config: {
                        sizeMax: En,
                        sizeUse: un
                    }
                }
            }, So = function() {
                var n = fn * $[sn]($[u](vn)[Gn]())
                  , i = $[pn][dn](n);
                a == n || $[Kn](n) ? $[u](hn)[X]($[b][ln]) : $[u](hn)[X](i)
            }, Uo = function() {
                var n = $[g][m][_]()
                  , i = $[g][C][_]()
                  , t = $[Jn]($[u](Ln)[An](On))
                  , r = L;
                for (var o in t)
                    if (n[o]) {
                        var e = t[o];
                        e = kn == e ? bn : e,
                        e = en == e ? En : e;
                        var c = i[e] ? i[e] : i[A];
                        r += _n + c[Cn] + gn + c[mn] + yn + n[o][mn] + Xn
                    }
                $[u](Nn)[X](r + Rn)
            }, Po = function(r, c) {
                var G = $[g][y][_]()
                  , p = n(o);
                c && (p = n(e));
                var h = $[k][O](p)
                  , C = h({
                    LNG: $[b],
                    userInfo: r,
                    roleList: G
                })
                  , m = $[u][Z]({
                    id: z,
                    simple: !a,
                    resize: !A,
                    width: Dn,
                    background: rn,
                    opacity: Tn,
                    title: L,
                    padding: un,
                    fixed: !a,
                    lock: !a,
                    content: C
                });
                So(),
                $[g][S]($[u](Sn)),
                $[u](Ln)[Gn]($[B](r[Un])),
                $[u](Qn)[qn](Vn)[Pn](Vn, function() {
                    qo($[u](Ln)[Gn](), function(n) {
                        $[u](Ln)[Gn](n),
                        Uo()
                    })
                }),
                Uo(),
                $[u](Mn)[Fn]();
                var N = $[s][f] + wn;
                c ? N = $[s][f] + Bn : L == r[mn] ? $[u](In)[Hn]() : N = $[s][f] + xn + r[Wn],
                $[u](Yn)[qn](Vn)[Pn](Vn, function() {
                    D()
                }),
                $[u](Zn)[qn](Vn)[Pn](Vn, function() {
                    $[u](this)[$i]()[$i]()[jn](ni)[zn](ii),
                    $[u](this)[R](ii),
                    $[u](ti)[X]($[u](this)[X]()),
                    $[u](ri)[Gn]($[u](this)[An](oi))
                }),
                $[u](ei)[qn](Vn)[Pn](Vn, function() {
                    Xo(ci, r[Wn], L)
                }),
                $[u](ai)[qn](Vn)[Pn](Vn, function() {
                    $[g][Ei](r)
                }),
                $[u](fi)[ui](function() {
                    D(!a)
                }),
                $[u](si)[qn](Vn)[Pn](Vn, function() {
                    D(!a)
                }),
                $[u](Gi)[qn](Vn)[Pn](Vn, function() {
                    $[u](di)[vi](pi)
                }),
                $[u](Ki)[qn](Vn)[Pn](Vn, function() {
                    var n = this;
                    $[K][li][hi]({
                        type: Ji,
                        title: $[b][Ai],
                        firstPath: $[u](Li)[Gn]()
                    }, function(i) {
                        $[u](n)[$i]()[jn](Oi)[Gn](i)
                    })
                }),
                $[u](ki)[qn](Vn)[Pn](Vn, function() {
                    $[u](this)[$i]()[jn](Oi)[Gn](L)
                });
                var D = function(n) {
                    c && (n = !A);
                    var o = {};
                    return $[u](_i)[bi](function() {
                        var n = $[Ci]($[u](this)[Gn]());
                        L != n && (o[$[u](this)[An](mn)] = n)
                    }),
                    L == $[gi]($[mi](o[mn])) ? ($[J][l]($[b][yi], Xi),
                    !A) : void $[u][E]({
                        url: N,
                        data: o,
                        type: M,
                        dataType: v,
                        beforeSend: function() {
                            $[J][I]()
                        },
                        error: $[K][x],
                        success: function(o) {
                            return $[J][W](o),
                            o[d] || Ni != o[Ri] ? (i = void a,
                            mo(t),
                            o[d] ? void (c ? m[W]() : L != r[mn] || A != n ? m[W]() : $[u](Mn)[Gn](L)[Fn]()) : void (c && $[u](Mn)[Gn](o[Ri]))) : void $[u][Z]({
                                content: o[Di],
                                padding: Ti,
                                width: Si,
                                okVal: $[b][Ui],
                                ok: function() {
                                    $[qi][Pi]($[K][Qi])
                                }
                            })
                        }
                    })
                }
            }, qo = function(i, t) {
                var r = $[g][m][Vi]()
                  , o = $[g][m][_]();
                i = $[Jn](i),
                $[u][Fi](i) && (i = {});
                var e = {
                    view: {
                        showLine: !A,
                        selectedMulti: !A,
                        dblClickExpand: !A,
                        addDiyDom: function(n, i) {
                            var t = Mi
                              , r = $[u](wi + n + Bi + i[Hi] + Ii)
                              , o = $[u](wi + n + Bi + i[Hi] + xi);
                            if (o[Yi](r)[Zi](zi)[Yi](ji + $[K][$t](nt) + Xn)[zn](it)[R](tt)[Wi](),
                            i[rt] >= A) {
                                var e = ot + t * i[rt] + et;
                                r[Yi](e)
                            }
                            $[u](wi + n + Bi + i[Hi] + ct)[An](at, i[Et])
                        }
                    },
                    callback: {
                        onClick: function(n, t, r) {
                            i || (i = {}),
                            $[u](wi + r[Hi] + ct)[ut](ft) ? delete i[r[Et]] : i[r[Et]] = No,
                            G()
                        }
                    }
                }
                  , E = function() {
                    var n = $[u](st);
                    $[u][dt][vt][Gt](n, e, r);
                    var i = $[u][dt][vt][pt](Kt)
                      , t = i[ht]();
                    i[lt](t[a], !a)
                }
                  , f = function() {
                    var r = n(c)
                      , o = $[k][O](r)
                      , e = o({
                        LNG: $[b]
                    });
                    $[u][Z]({
                        id: Jt,
                        title: $[b][At],
                        padding: un,
                        width: Lt,
                        height: Ot,
                        lock: !a,
                        background: kt,
                        opacity: Tn,
                        resize: !a,
                        fixed: !a,
                        content: e,
                        ok: function() {
                            t($[B](i))
                        },
                        cancel: !a
                    }),
                    E()
                }
                  , s = function($, n) {
                    for (var i = [], t = $[bt](Et, n, _t), r = t; t = t[Ct](); )
                        i[gt](t);
                    for (var o = i[mt] - A; o >= a; o--)
                        $[lt](i[o], !a);
                    $[lt](r, !a)
                }
                  , G = function() {
                    var n = L;
                    $[u](yt)[zn](Xt),
                    $[u](Nt)[zn](ft);
                    var t = function(n) {
                        var i = $[g][C][_]();
                        n = kn == n ? bn : n,
                        n = en == n ? En : n;
                        var t = i[n] ? i[n] : i[A]
                          , r = Rt;
                        for (var o in i) {
                            var e = i[o];
                            if (e[Dt]) {
                                var c = o == n ? ii : L;
                                r += Tt + o + St + c + yn + e[mn] + Ut
                            }
                        }
                        r += Pt;
                        var a = qt + n + Qt + t[Cn] + Vt + t[mn] + Ft + r + Mt;
                        return a
                    }
                      , r = $[u][dt][vt][pt](Kt);
                    $[u][wt](i) && s(r, $[u](Ht)[Bt]());
                    for (var e in i)
                        o[e] && (s(r, e),
                        $[u](It + e + xt)[R](ft),
                        n += Wt + e + Yt + o[e][mn] + Zt + t(i[e]) + Ut);
                    $[u](zt)[X](n)
                }
                  , v = function() {
                    $[u](nr)[$r](Vn)[jt](Vn, function() {
                        var n = $[u](this)[$i]()[An](ir);
                        delete i[n],
                        G()
                    }),
                    $[u](tr)[$r](Vn)[jt](Vn, function() {
                        var n = $[u](this)[An](rr)
                          , t = $[u](this)[$i]()[An](or)
                          , r = $[u](this)[$i]()[$i]()[$i]()[An](ir);
                        t != n && (i[r] = n,
                        G())
                    })
                };
                f(),
                G(),
                v()
            }, Qo = function() {
                $[u](ar)[cr](Er)[er](ur)
            }, Vo = function() {
                $[u](sr)[Vn](Qo)[fr](Qo),
                $[u][Gr]({
                    zIndex: vr,
                    selector: dr,
                    items: {
                        "user-list-edit": {
                            name: $[b][pr],
                            icon: pr,
                            accesskey: Kr
                        },
                        sep1: hr,
                        "user-remove": {
                            name: $[b][Wi],
                            icon: lr,
                            accesskey: Jr
                        },
                        "user-status-close": {
                            name: $[b][Ar],
                            icon: Lr,
                            accesskey: Or
                        },
                        "user-status-open": {
                            name: $[b][kr],
                            icon: br,
                            accesskey: _r
                        },
                        sep2: hr,
                        "user-space": {
                            name: $[b][Cr],
                            icon: gr,
                            accesskey: mr,
                            className: yr
                        },
                        sep3: hr,
                        "group-remove-from": {
                            name: $[b][Xr],
                            icon: Nr,
                            accesskey: Rr
                        },
                        "group-add": {
                            name: $[b][Dr],
                            icon: Tr,
                            accesskey: ni
                        },
                        "group-reset": {
                            name: $[b][Sr],
                            icon: Ur,
                            accesskey: Pr
                        }
                    },
                    callback: function(n, i) {
                        i[qr][An](Qr),
                        $[u](Vr)[X](),
                        $[u](i[qr])[jn](Mr)[Fr](wr, !a);
                        var t = [];
                        $[u](Br)[bi](function() {
                            t[gt]($[u](this)[$i]()[$i]()[An](Qr))
                        }),
                        Mo(n, t, L)
                    }
                })
            }, Fo = function() {
                $[u](vn)[jt](Oi, So),
                $[u](Hr)[jt](Vn, function(n) {
                    if (!$[u](n[xr])[Ir](Oi)) {
                        var i = $[u](this)
                          , t = i[An](Wr)
                          , r = [];
                        if ($[u](Br)[bi](function() {
                            r[gt]($[u](this)[$i]()[$i]()[An](Qr))
                        }),
                        Yr == t) {
                            var o = i[$i]()[$i]()[An](Qr);
                            r = [o]
                        }
                        return Mo(t, r, i, n),
                        !a
                    }
                })
            }, Mo = function(n, t, r, o) {
                var e = $[u](Vr)[X]();
                switch (n) {
                case Zr:
                    Ro(e);
                    break;
                case zr:
                    Do(e);
                    break;
                case jr:
                    Xo($o, t, e);
                    break;
                case no:
                    qo(io, function($) {
                        Xo(to, t, $)
                    });
                    break;
                case ro:
                    qo(io, function($) {
                        Xo(oo, t, $)
                    });
                    break;
                case eo:
                    var c = r[An](oi);
                    Xo(co, t, c);
                    break;
                case ao:
                    Xo(Eo, t, A);
                    break;
                case uo:
                    Xo(Eo, t, a);
                    break;
                case fo:
                    $[u][Go][so]($[b][vo] + po + $[b][ln], function(n) {
                        var n = $[Ko](n);
                        return $[Kn](n) ? ($[J][l]($[b][ho], lo),
                        !A) : void Xo(Jo, t, n)
                    });
                    break;
                case Ao:
                    Xo(ci, t, L);
                    break;
                case Lo:
                    var E = r[jn](Mr);
                    E[An](wr) ? E[Oo](wr) : E[An](wr, ko),
                    wo();
                    break;
                case Yr:
                    Po(i[t[a]]),
                    $[bo](o)
                }
            }, wo = function() {
                $[u](Br)[mt] >= A ? $[u](D)[zn](T) : $[u](D)[R](T),
                $[u](_o)[zn](ii),
                $[u](Br)[bi](function() {
                    $[u](this)[$i]()[$i]()[R](ii)
                })
            }, Bo = function() {
                $[u](Co)[jt](Vn, function() {
                    $[u](this)[An](wr) ? $[u](go)[An](wr, ko) : $[u](go)[Oo](wr),
                    wo()
                }),
                $[u](go)[jt](Vn, function() {
                    wo()
                })
            };
            return Bo(),
            Fo(),
            Vo(),
            {
                resetUserList: yo,
                userDefaultData: To,
                resetList: function() {
                    i = void a
                },
                loadList: mo,
                add: Ro
            }
        })
    }(this, void 0, $("#$%&'$"), $("())*+,-*+$..&'/*+0+.$1*+0+.$12$13$,"), $("4*.)5*6+$,7&+.48.15"), $("4*.)5*6+$,48.15"), $("4*.)5*6+$,91):,.48.15"), $("4*.)5*/,:6);$5$-.48.15"), 0, $("(<(="), $(">"), $("())?:+."), $("@"), $("+0+.$12$13$,*/$."), $("<+:'"), $("-:#$"), $("+0+.$1A(.("), $("-:,$"), $("1$13$,"), $(".&)+"), $("B&)+"), 1, "", $("-:1)&5$"), $(".$1)5(.$"), $("7C@"), $("/$.7&+."), $("+0+.$1@,:6)D:5$"), $(";0+.$1"), $("+0+.$1@,:6)"), $("+0+.$1D:5$"), $("8.15"), $("46+$,E5&+.E-:'.$'."), $("(##F5(++"), $("436..:'E(-&.:'E16.&G36..:'"), $("#&+(35$#"), $("+&H$I+$"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E5&+.E-$55G4+)(-$"), $(":3<$-."), $("+0+.$1K1$13$,K,$1:L$K.&)+"), $("+0+.$1K1$13$,K+$.K,:5$"), $("+0+.$1K1$13$,K,$1:L$K/,:6)"), $("+0+.$12$13$,*#:M-.&:'N(-.&:'O"), $("PQ;B"), $("6+$,9AO"), $("<+:'R'-:#$"), $("N)(,(1O"), $("5:(#&'/"), $("(<(=R,,:,"), $("-5:+$"), $("5&+."), $("#&(5:/"), $("+8(,$E#&(5:/"), $("#&(5:/E6+$,E-:'%&,1"), $("S6$+.&:'"), 30, 250, $("JTTT"), .2, $("U,&.$"), $("VWXYZ["), $("#$%(65."), $("W"), $("T"), 1073741824, $(")(,+$\\5:(."), $("L(5"), $("4+&H$E1(=E+$.G&')6."), $("%&5$;&H$"), $(")(.8B::5+"), $("&+C(C"), $("4+&H$E1(=E+$.G&"), $("+)(-$K.&)+K#$%(65."), $("<+:'A$-:#$"), $("(..,"), $("J/,:6)E&'%:E5&+."), $("L(56$"), $(",$(#"), $("V"), $("]+)('G.&.5$E.&1$:6.OZT^G-5(++O^5(3$5G5(3$5E"), $("+.05$"), $("^G.&.5$O^"), $("'(1$"), $("^_"), $("]*+)('_"), $("4#&(5:/E/,:6)E#&+)5(0G4-$55"), $("]#&LG+.05$O^-5$(,`3:.8^_]*#&L_"), 425, .1, $("4+8(,$EL&$UE&'%:"), $("/,:6)9'%:"), $("3&'#"), $("6'3&'#"), $("4#5/E/,:6)E+$5$-."), $("-5&-a"), $(".$=.\\:-6+"), $("4&')6.E5&'$Gb'(1$O'(1$c"), $("+0+.$12$13$,*(##"), $("+0+.$12$13$,*(##N&+91):,.OV"), $("8&#$"), $("4+8(,$E(-.&:'G4,$1:L$E36..:'"), $("+0+.$12$13$,*$#&.N6+$,9AO"), $("6+$,9A"), $("J+0+.$1E+(L$"), $("4+$5$-.E#,:)E1$'6G("), $(",$1:L$F5(++"), $("%&'#"), $(")(,$'."), $("("), $("+$5$-.$#"), $("4+$5$-.E#,:)E1$'6G4,:5$K.&.5$"), $("&')6.b'(1$O,:5$c"), $("#(.(E,:5$E&#"), $("4,$1:L$E36..:'"), $("#$5"), $("4#&(5:/E6+$,G4#&(5:/E/:.:E)(.8"), $(":)$'P(.8"), $("a$0R'.$,"), $("4-:'.$'.E3:=G&')6."), $("J+0+.$1E+(L$E('#E(##"), $("46+$,E+$..&'/E1:,$E3.'"), $(".://5$F5(++"), $("46+$,E+$..&'/E1:,$"), $("8&##$'"), $("4+$5$-.E)(.8G(4+$5$-.E3.'"), $(")(.8;$5$-."), $("()&"), $("%:5#$,"), $(")(.8K()&K+$5$-.K%:5#$,"), $("4+$5$-.E)(.8G&')6."), $("&')6."), $("4+$5$-.E)(.8G(4,$+$."), $("$(-8"), $("4+8(,$E#&(5:/G4-:'.$'.E&'%:Gb'(1$c"), $("6,5R'-:#$"), $(".,&1"), $("6,5A$-:#$"), $("':.K'655"), $("$,,:,"), $("L$,+&:'K$,,:,"), $("&'%:"), $("#(.("), $("XT)=GWZ)="), $("XTT)="), $("5$(,'K1:,$"), $(":)$'"), $("U&'#:U"), $("L$,+&:'I)#(.$d&)"), $("/$.7&+.B,$$"), $("&+M,,(0"), 12, $("J"), $("GJ"), $(".9#"), $("K+U&.-8"), $("K&-:"), $(",$1:L$"), $("3$%:,$"), $("(%.$,"), $("]&G-5(++O^%:'.E&-:'G/,:6)E+$5$-.E3:=G&-:'E+:,.^_]*_"), $("]+)('G-5(++O^.,$$K&-:'G36..:'^_"), $("&-:';1(55"), $("/,:6)E/6$+."), $("&-:K#:-6"), $("/,:6)K&-:'"), $("5$L$5"), $("]+)('G-5(++Oe+)(-$eG+.05$Oe#&+)5(0`&'5&'$E35:-afU&#.8`"), $(")=e_]*+)('_"), $("K("), $("#(.(E/,:6)E&#"), $("&#"), $("8(+F5(++"), $(".8&+"), $("J6+$,E/,:6)E+$5$-."), $("&'&."), $("HB,$$"), $("%'"), $("/$.gB,$$Q3<"), $("6+$,E/,:6)E+$5$-."), $("/$.C:#$+"), $("$=)('#C:#$"), $("+$5$-.K6+,$K/,:6)K#5/"), $("+0+.$1K1$13$,K/,:6)K$#&."), 560, 300, $("J%%%"), $("/$.C:#$h0P(,(1"), null, $("/$.P(,$'.C:#$"), $(")6+8"), $("5$'/.8"), $("J6+$,E/,:6)E+$5$-.G4-6,;$5$-.$#C:#$"), $("-6,;$5$-.$#C:#$"), $("J6+$,E/,:6)E+$5$-.G(b#(.(E/,:6)E&#c"), $("]65G-5(++Oe#,:)#:U'E1$'6e_"), $("#&+)5(0"), $("]5&G#(.(E&'%:O^"), $("^G-5(++O^"), $("]*5&_"), $("]*65_"), $("]#&LG-5(++O^3.'E/,:6)G+$5$-.E#,:)E1$'6G:)$'^G#(.(E-6,,$'.O^"), $("^_iiiii]36..:'G-5(++O^3.'G5(3$5G5(3$5E"), $("G3.'E=+^G.0)$O^36..:'^G#(.(E.://5$O^#,:)#:U'^_iiiiii]+)('G-5(++O^/,:6)E&'%:E.&.5$G),EZ^_"), $("]*+)('_]+)('G-5(++O^-(,$.^_]*+)('_iiiii]*36..:'_"), $("iiii]*#&L_"), $("&+R1).0Q3<$-."), $(".$=."), $("4/,:6)E&#"), $("J6+$,E/,:6)E+$5$-.G(b#(.(E/,:6)E&#O"), $("c"), $("]5&G-5(++O^/,:6)E+$5%^G/,:6)E&#O^"), $("^_GGGG]+)('G-5(++O^.&.5$^_]&G-5(++O^%:'.E&-:'G&-:'E/,:6)^_]*&_"), $("]*+)('_GGGG]&G-5(++O^%:'.E&-:'G&-:'E,$1:L$G,$1:L$^_]*&_"), $("4+$5$-.E/,:6)E,&/8."), $("5&L$"), $("#&$"), $("4,&/8.E-:'.$'.G4/,:6)E+$5%G4,$1:L$"), $("/,:6)E&#"), $("4/,:6)E+$5%G4#,:)#:U'E1$'6G5&"), $("#(.(E&'%:"), $("#(.(E-6,,$'."), $(".,&//$,"), $("%&5.$,"), $("4-:'.$=.E1$'6E5&+."), $("`L&+&35$"), $("-:'.$=.1$'6`8&#$"), $("-:'.$=.1$'6"), $("3:#0"), $("-:'.$=.2$'6"), 9999, $("46+$,E(-.&:'E1$'6"), $("$#&."), $("$"), $("EEEEEEEE"), $(".,(+8"), $("#"), $("+0+.$1K1$13$,K6'6+$"), $("1&'6+E+&/'"), $("-"), $("+0+.$1K1$13$,K6+$"), $(":aE-&,-5$"), $(":"), $("+0+.$1K1$13$,K+)(-$"), $("8##"), $(","), $("6+$,E+)(-$E1$'6E-$55"), $("+0+.$1K1$13$,K/,:6)K,$1:L$"), $(",$1:L$E-&,-5$"), $("/"), $("+0+.$1K1$13$,K/,:6)K&'+$,."), $(")56+E+&/'"), $("+0+.$1K1$13$,K/,:6)K,$+$."), $(")$'-&5"), $("&"), $(">.,&//$,"), $("#(.(E&#"), $("J-:'.$'.E+0+.$1E/,:6)G4/,:6)E&#"), $("),:)"), $("46+$,E+$5$-."), $("-8$-a$#"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-.`-8$-a$#"), $("J-:'.$'.E+0+.$1E/,:6)G4-:'.$'.Gb#(.(E(-.&:'c"), $("&+"), $(".(,/$."), $("#(.(E(-.&:'"), $("6+$,E5&+.E$#&."), $("6+$,E(##"), $("6+$,E&1):,."), $("/,:6)E,$1:L$E%,:1"), $("/,:6)D$1:L$\\,:1"), $("/,:6)E(##"), $("jk"), $("/,:6)M##"), $("/,:6)E,$+$."), $("/,:6)D$+$."), $(",:5$E+$."), $(",:5$;$."), $("6+$,E+.(.6+E:)$'"), $("+.(.6+;$."), $("6+$,E+.(.6+E-5:+$"), $("6+$,E+)(-$"), $("),:1)."), $("(,.A&(5:/"), $("+0+.$1K1$13$,K+)(-$K.&)+"), $("`]3,*_"), $(")(,+$9'."), $("+0+.$1K1$13$,K+)(-$K'613$,"), $("U(,'&'/"), $("+)(-$;$."), $("6+$,E,$1:L$"), $("6+$,E5&+.E+$5$-."), $(",$1:L$M..,"), $(".,6$"), $("+.:)PP"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E5&+.E-$55G"), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-.E+$."), $("J-:'.$'.E+0+.$1E/,:6)G46+$,E+$5$-."))
}(function($) {
    var n = function($) {
        return String.fromCharCode($.charCodeAt() - 3)
    };
    return function() {
        for (var i = arguments, t = "", r = 0, o = i.length; o > r; r++)
            if ("number" == typeof i[r])
                t += n($[0].charAt(i[r]));
            else
                for (var e = 0, c = i[r].length; c > e; e++)
                    t += n($[0].charAt(i[r][e].charCodeAt() - 35));
        return t
    }
}(["ghilqds2vufwj|pPe1oxOkLrVm{'KJGWQU0F#}X&byD)@SRHt3z456789I?%A=n^`Y*>]E\f~"]));
;define("app/src/setting/system/tpl/userList.html", [], '<div class="user-toolbar">\n	<div class="btn-group btn-group-sm ml-10">\n		<button type="button" class="btn btn-default" data-action="user-add">{{LNG.system_member_add}}</button>\n		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="caret"></span>&nbsp;\n			<span class="sr-only">Dropdown</span>\n		</button>\n		<ul class="dropdown-menu">\n			<li><a href="javascript:void(0);" data-action="user-import">{{LNG.system_member_import}}</a></li>\n		</ul>\n	</div>\n	<div class="btn-group btn-group-sm ml-10 button-aciton-muti">\n		<button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="role_title pr-5">{{LNG.system_member_group_config}}</span><span class="caret"></span>\n		</button>\n		<ul class="dropdown-menu">\n			<li><a href="javascript:void(0);" data-action="group-remove-from">{{LNG.system_member_group_remove}}</a></li>\n			<li><a href="javascript:void(0);" data-action="group-add">{{LNG.system_member_group_insert}}</a></li>\n			<li class="divider disabled"></li>\n			<li><a href="javascript:void(0);" data-action="group-reset">{{LNG.system_member_group_reset}}</a></li>\n		</ul>\n	</div>\n	<div class="btn-group btn-group-sm ml-5 button-aciton-muti">\n		<button class="btn btn-default" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n			<span class="role_title pr-5">{{LNG.system_member_role}}</span><span class="caret"></span>\n		</button>\n		<ul class="dropdown-menu">\n			{{each roleList value key}}\n			<li><a href="javascript:void(0);" data-action="role-set" data-role-id="{{key}}">{{value}}</a></li>\n			{{/each}}\n		</ul>\n	</div>\n\n	<div class="btn-group btn-group-sm button-aciton-muti ml-10">\n		<button class="btn btn-default" data-action="user-status-close">{{LNG.system_member_unuse}}</button>\n		<button class="btn btn-default" data-action="user-status-open">{{LNG.system_member_use}}</button>\n		<button class="btn btn-default" data-action="user-remove">{{LNG.remove}}</button>\n	</div>\n</div>\n<div class="user-list">\n	<table id="list" align="center" border="0" cellspacing="0" cellpadding="0">\n		<tbody>\n			<tr class="title">\n				<td class="select"><input type=\'checkbox\' class="user-select-set kui-checkbox size-small"/></td>\n				<td class="name">{{LNG.username}}</td>\n				<td class="name">{{LNG.userNickName}}</td>\n				<td class="role">{{LNG.system_member_role}}</td>\n				<td class="space">{{LNG.space_size_use}}</td>\n				<td class="group">{{LNG.system_member_group}}</td>\n			</tr>\n			{{each userList v i}}\n				{{if v && (selectGroup==\'1\' || v.groupInfo[selectGroup]) }}\n				<tr data-id="{{v.userID}}" data-action="user-list-select" class="user-action-menu user-list-cell {{if v.status=="0"}}unuse{{/if}}">\n					<td class="select">\n						{{if v.userID!=\'1\'}}<input type=\'checkbox\' class="user-select kui-checkbox size-small"/>{{/if}}\n					</td>\n					<td class="name">\n						<a data-action="user-list-edit" href="javascript:void(0);">\n							{{if v.nickName}} {{v.nickName}} {{else}} {{v.name}} {{/if}}\n						</a>\n						<span class="label-small" {{if v.homePath}}style="background:#84d9ff;"{{/if}}>{{v.userID}}</span>\n					</td>\n					<td class="name">\n						<a data-action="user-list-edit" href="javascript:void(0);">\n							{{v.nickName}} \n						</a>\n						<span class="label-small" {{if v.homePath}}style="background:#84d9ff;"{{/if}}>{{v.userID}}</span>\n					</td>\n										<td class="role">{{roleList[v.role]||""}}</td>\n					<td class="space">{{v.config.sizeUse}}/{{v.config.sizeMax}}</td>\n					<td class="group">\n						{{each v.groupInfo groupRoleID groupID}}\n							{{if groupList[groupID]}}							\n								{{if groupRoleID = groupRoleID == "read"  ? "1":groupRoleID}}{{/if}}\n								{{if groupRoleID = groupRoleID == "write" ? "2":groupRoleID}}{{/if}}\n								{{if groupRoleList[groupRoleID]? "":groupRoleID="1" }}{{/if}}\n								{{if groupRoleInfo = groupRoleList[groupRoleID]}}{{/if}}\n								<span {{groupRoleID}}  class="label label-{{groupRoleInfo.style}}" \n									title-timeout=\'50\' title="{{groupRoleInfo.name}}">\n									{{groupList[groupID][\'name\']}}\n								</span>\n							{{else}}\n								<!-- <span class="label label-danger">{{groupID}}</span> -->\n							{{/if}}\n						{{/each}}\n					</td>\n				</tr>\n				{{/if}}\n			{{/each}}\n		</tbody>\n	</table>\n</div><!-- 用户列表 -->\n\n\n');
;define("app/src/setting/system/tpl/user.html", [], '<div class=\'content-box dialog-user can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			{{if !userInfo.name}}\n			<i class="font-icon icon-group"></i>{{LNG.system_member_add}}\n			{{else}}\n			<i class="font-icon icon-pencil"></i>\n			{{if userInfo.nickName}} {{userInfo.nickName}} {{else}} {{userInfo.name}}{{/if}}\n			{{/if}}\n		</div>    \n		{{if userInfo.name}}\n		<div class="share-view-info">{{userInfo.config.sizeUse}}/{{userInfo.config.sizeMax}}</div>\n		{{/if}}    \n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.username}}:</span>\n			<input type="text" name="name" value="{{userInfo.name}}" />\n			{{if userInfo.name}}\n			<a href="javascript:void(0);" class="font-icon-label dialog-goto-path" title="{{LNG.open_the_path}}">\n				<i class="font-icon icon-folder-open"></i>\n			</a>\n			<i style="color:#698ebf;">id:{{userInfo.userID}}</i>\n			{{else}}\n			<i class="desc">{{LNG.username}}</i>\n			{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.userNickName}}:</span>\n			<input type="text" name="nickName" value="{{userInfo.nickName || \'\' }}" />\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.password}}:</span>\n			<input type="text" name="password" \n			value="{{if !userInfo.name}}{{userInfo.password}}{{/if}}" \n			placeholder="{{if userInfo.name}}{{LNG.system_member_password_tips}}{{/if}}"/>\n			{{if userInfo.name}}<i class="desc">{{LNG.system_member_password_tips}}</i>{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{userInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_role}}:</span>\n			<input type="hidden" name="role" value="{{userInfo.role}}"/>\n			<div class="btn-group select-drop-menu">\n				<button class="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n					<span class="role_title pr-5">\n					{{if roleList[userInfo.role]}}\n						{{roleList[userInfo.role]}}\n					{{else}}\n						<i>{{LNG.system_member_role_select}}</i>\n					{{/if}}\n					</span><span class="caret"></span>\n				</button>\n				<ul class="dropdown-menu">\n				{{each roleList value key}}\n					{{if key==userInfo.role}}\n					<li><a href="javascript:void(0);" class="selected" data-role-id="{{key}}">{{value}}</a></li>\n					{{else}}\n					<li><a href="javascript:void(0);" data-role-id="{{key}}">{{value}}</a></li>\n					{{/if}}\n				{{/each}}\n				</ul>\n			</div>\n\n			<!-- <input type="text" value="{{userInfo.roleID}}" /> -->\n			<a href="javascript:void(0);" class="btn btn-sm user-setting-more-btn">{{LNG.more}}</a>\n			<div style="clear:both"></div>\n		</div>\n\n		<div class="user-setting-more {{if !userInfo.homePath}}hidden{{/if}}">\n			<div class="input-line select-path">\n				<span class="input-title">{{LNG.system_set_home_path}}:</span>\n				<input type="text" name="homePath" value="{{if userInfo.homePath}}{{userInfo.homePath}}{{/if}}" \n				placeholder="{{LNG.system_set_home_path_tips}}"/>\n				<a href="javascript:void(0);" class="btn btn-sm btn-default select-btn">\n					<i class="font-icon icon-folder-open"></i>\n				</a>\n				<a href="javascript:void(0);" class="btn btn-sm btn-link reset">\n					<i class="font-icon icon-remove"></i>\n				</a>\n				<div style="clear:both"></div>\n			</div>\n		</div>\n\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_group}}:</span>\n			<input id="group-info-list" type="hidden" name="groupInfo" \n			value="{{if userInfo.groupInfo}}{{userInfo.groupInfo}}{{/if}}" />\n			<div class="dialog-group-display">\n				<div class="cell"></div>\n				<button class="btn btn-default btn-sm dlg-group-select" type="button">\n					<i class="font-icon icon-pencil"></i>\n					<span class="group-title">{{LNG.system_member_group_edit}}</span>\n				</button>\n			</div>\n			<div style="clear:both"></div>\n		</div>\n	</div>\n\n	<div class="share-action">\n		{{if !userInfo.name}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n		<button type="button" class="btn btn-primary" id="system-save-and-add">{{LNG.button_save_and_add}}</button>\n		{{else}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_save}}</button>\n		<a type="button" href="javascript:void(0);" class="remove-button">{{LNG.button_del}}</a>\n		{{/if}}\n	</div>\n</div>\n');
;define("app/src/setting/system/tpl/userImport.html", [], '<div class=\'content-box can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			<i class="font-icon icon-group"></i>{{LNG.system_member_import}}\n		</div>\n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.username}}:</span>\n			<textarea id="name" type="text" name="name" value="{{userInfo.name}}"></textarea>\n			<i class="desc" style="position: absolute;line-height:1.5em;">{{@LNG.system_member_import_desc}}</i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.password}}:</span>\n			<input id="password" type="text" name="password" value="{{userInfo.password}}"/>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{userInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_role}}:</span>\n			<input type="hidden" id="role" name="role" value="{{userInfo.role}}"/>\n			<div class="btn-group select-drop-menu">\n			  <button class="btn btn-default btn-xs" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n				<span class="role_title pr-5">\n				{{if roleList[userInfo.role]}}\n					{{roleList[userInfo.role]}}\n				{{else}}\n					<i>{{LNG.system_member_role_select}}</i>\n				{{/if}}\n				</span><span class="caret"></span>\n			  </button>\n			  <ul class="dropdown-menu">\n				{{each roleList value key}}\n					{{if key==userInfo.role}}\n						<li><a href="javascript:void(0);" class="selected" data-role-id="{{key}}">{{value}}</a></li>\n					{{else}}\n						<li><a href="javascript:void(0);" data-role-id="{{key}}">{{value}}</a></li>\n					{{/if}}\n				{{/each}}\n			  </ul>\n			</div>\n\n			<!-- <input type="text" id="role" name="role" value="{{userInfo.role}}" /> -->\n			<i class="desc">{{LNG.system_member_role}}</i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_member_group}}:</span>\n			<input id="group-info-list" type="hidden" name="groupInfo" value="{{userInfo.groupInfo}}" />\n\n			<div class="dialog-group-display">\n				<div class="cell"></div>\n				<button class="btn btn-default btn-sm dlg-group-select" type="button">\n					<i class="font-icon icon-pencil"></i>\n					<span class="group-title">{{LNG.system_member_group_edit}}</span>\n				</button>\n			</div>\n			<div style="clear:both"></div>\n		</div>\n	</div>\n\n	<div class="share-action">\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n	</div>\n</div>\n');
;define("app/src/setting/system/tpl/groupSelect.html", [], '<div class=\'content-box select-user-group can-not-select\'>\n	<div class=\'content-info\'>\n		<div class="title-info">\n			<span class="title">{{LNG.system_group_select}}:</span>\n			<span class="title title-right">{{LNG.system_group_select_result}}:</span>\n		</div>\n		<div class="left-content ztree" id=\'user-group-select\'></div>\n		<div class="center-action"><i class="font-icon icon-arrow-right"></i></div>\n		<div class="right-content">\n			<ul class="select-group-right"></ul>\n		</div>\n		<div style="clear:both"></div>\n	</div>\n</div>\n');
;var _kod_0x2751 = ['GsKwwqR7w58=', 'eXzDt8KxW8KrKAnDncKBbDfCoMK6wpXChcKufMK4LBvDoMORT1LCkFk/dMO/X0U=', 'Y8K8wrnDn0LDvA==', 'aELDvnjDqcKCwo7CmcKKw4g=', 'bMOUUxgb', 'IsK9w450C2zDqcKuwqTDpyY=', 'wpxGAMKZwr8=', 'YMKtD8OewqrDjMOuw7llGcKCVmYvGcOyw5Q=', 'wphYdHDCtw==', 'w4ZKOlZt', 'wrPDpmzDgUYOw5TDpQ==', 'w6zDm8OMwq0owolxwo10Dg==', 'wr7Dp8ORwrTDlsOjZlJIwozDicKIw6/DmcOoHA==', 'WT4Kw5nDi8KkbibCvELDi8KvRBvCrgHCsUcIaA==', 'XMKHeGvDkQ==', 'U1cXDUw=', 'a8KNb1nDlA==', 'YWkYPG4=', 'aSB3wozCnlo=', 'CcOWKsOEwqE=', 'B8ObR8Kdwpc=', 'w6lTeFB1', 'w6czSF0Z', 'EHzDmMK8w6TCtg==', 'CMKGAcK8UA==', 'EMOxCMOiwqE=', 'w7vCocKnwq3Dp8Ohwp/CmxrCmgA=', 'wqDDssOCwqAFwqvDr1TCm8Ozw7E=', 'TGvDsV1/wr3Dn2nDp8OA', 'w7HCqgvDtsKew6JWHmBjJBDChcK7X8KZ', 'dsKSSUg=', 'bsKewqVg', 'w4g7w7gnw5s=', 'AMOkEsO1wq/Co8OUecKUw4bDn8OJYcOLw4jDt8Oa', 'fsKJwqlm', 'wrtkw4fCrgw=', 'JsK9w5FoFGY=', 'woo2wr08wrc=', 'IsKrNifCrn7Dpmg=', 'd8K7MWM=', 'DMO3S8KVf8Kmw4I=', 'HTwMw7jDkcKwJhTCpGTDp8Kl', 'HxnCrx8p', 'G8O2UsKN', 'dcKHT0/DkCfDkMOffMKXwoZ+', 'c8O6woE=', 'LcO2wrDDmULCpw==', 'acOcaAMl', 'ccOgwqjDlBnCr0/CucKN', 'GsO7Xg==', 'Q8KGwpTCssKt', 'w6Ihw7MYw6k=', 'ZMKpwqXCkMKC', 'A8Kowpx2w4A=', 'JnfDsMKzHsKgKD3DlMKKJA==', 'L8OFScKpSg==', 'IMK3w5tgDmbDhMKWwrzDpDA=', 'I8Kew4pPJw==', 'NUPDhmdI', 'HMKjGsKkcg==', 'w6hdUjPCnQ==', 'RcKvRCon', 'wo/CmiEsTg==', 'aCxvwqvCnkTCgMO8woEwHHc4UFfDuA==', 'w5tTQGlSwrvCt1zDhcKwPMO+wrI=', 'SA8gwoQIwrXDtg==', 'wrDDpMOfwqAFwr7DnGvCkcOow7RoWcK3EMONRjxpw6fChzMTw4A=', 'LlfDjMObZwo=', 'NMKuwrdPw73CrFLDqmXDpR7DlMKWR8O/wr9DRw==', 'wrXCpwjCqMOaA3TCog==', 'eMOfTxkOwpnCuylqbcO3w4jDssOfw6VGw6BHUA==', 'w67DmmVz', 'elHDrHQ=', 'wpTCnT7Cjw==', 'UMKxAMKB', 'w67CvBnDpsKSw6Fu', 'McKtwrdbw5fCuQ3DtXY=', 'dcKmNzrCrHTDjn9nw4XClMKc', 'KcKMOMKMdmfDjsOmHA==', 'P1/DrcKVw7E=', 'wqHCvwDCqsO/', 'N8OSwpLDvFo=', 'w5xqehvCtA==', 'w64bVGY4w6bCrQ==', 'wq/CkAEtTA==', 'w5o2w7I=', 'wrEpf8K+KF93FA==', 'w6FDNntY', 'FsOmVsKV', 'woMuwrcPwr3CiGhXJnzCqMOKIcK6SMOdwoMC', 'JcOVVRcOw5nCiS9gL8Oxw53DmcKNw6k=', 'eQjDqMK6', 'w74gw7Qyw54=', 'K2rDlVFe', 'Z8OQUV7Dmz/DmsOIfsKAwpM=', 'w45TWVZFwqzCkV7DkMKNIA==', 'Y8OcRsOWwpw=', 'woPCuDnCucO0', 'w7F7w4TCkisDw7HDm1scEcODEhzCl8OkLMOICsKRI8KGw7kkwqknCj/Clj/CpcONw53DlGE=', 'OMKzwrtP', 'dUvDl0/DjQ==', 'VcO0wrHDkRo=', 'CTXCrRwk', 'wqLDqEnDpEE=', 'bsKKUVc=', 'eMKuKHQ=', 'LBXCjRI=', 'AMOcZ8KhwqA=', 'w5PCh8KlwqjDpg==', 'wrvDvcOPwoPDlsO9Ll1VwprDmcOrw7TDj8Oo', 'bjxXwq3Cvw==', 'w4gZWGM5', 'McKywpp2w5Y=', 'wrPDpmzDgUYOw5TDlMKJwqNNTwbDvA==', 'QcKLZQc9YQ==', 'PgvCmxsK', 'FsOlEcOgwqTCqsOFe8KVw44=', 'wrvCqcK7wrbDt8Opw4bChh7ChhDDqsOlTVRvCsKowqIf', 'F8O8UsKN', 'wrnDicOewrEF', 'wpc7wqI2wozCpXlbGW3CnQ==', 'PcObdcKTVQ==', 'dMOzZ8OXwoUdw6HDhA==', 'wrvDncK+wpszw6EyaUA+ewTDpRQrworCrz8zbhMiQnTDk8Kqw5o=', 'bsKcwpDCvsK2', 'w6zCocKuwr7DrsO8wqjCmh7ChwY=', 'w4R+D3xg', 'QU8nB2M=', 'w4rDscOewrUJ', 'GQ/Cpxsa', 'AXHDkUd7', 'fcO/ZQct', 'IcKHDsKKWA==', 'HMKow6xEBg==', 'HcOREhMgLcKDB8K5wrXDrxMiJjbCug==', 'eFTDoHzDpcKDwq8=', 'wqF4JsKewoA=', 'O8O6wrzDmlvCpQ==', 'wrRPw43CuCc=', 'AMO0G8Okwp/CvcOu', 'FMKxB8KOc8OkB8K4wo7DkjIvwrs/w4lM', 'N8KNL8Ofwrc=', 'f8KfwrRgZk5MIiA=', 'w6FdWSbCmg==', 'McK3wqZrw73CuAs=', 'w7oQSGctw4LCrh7Cm1Ntwq0Rwqgh', 'w7zDiMKwwpIc', 'w79oDlE=', 'w6xATwrCo8K+eQ==', 'Sm/DuEPDiQ==', 'wqrCmDo2cn7DtQ==', 'P3/DqMK6w5s=', 'w6DDrsOVwqcUwrbDtjTCjcO8w7Ii', 'w7bDgsKywpQ9', 'w7JAWVZD', 'wpolwrfDowo=', 'wqUpwrokwpY=', 'wpJtdHDCvBU=', 'woRlaHE=', 'wpdpw5XCpAU=', 'Zx3DqQ==', 'w4h2G8KdwrZ1woLDuMO7RjQ4BwYcw53CtA==', 'ZBLDp8K/wrcp', 'IcKiDsOW', 'JQzChhg/WRMg', 'OMK9IHzCimYvw7rCiDM3MQzDiw==', 'JcKpwrRKw7zCrw==', 'ccK9KmTClVkO', 'Px/DqsK4wq0oK2VTE2Ikw4vCk8OLAjhA', 'ecO7wpzDti4rwrZs', 'W2bDhcKrw7XCvcKeFsKowoh/JRYXRsK5w6FmTzs=', 'c8KxJifCp30=', 'wqDDscOFwrcL', 'ZcKSVVjDng==', 'aTpfwojCsg==', 'wpMpwpMYwqk=', 'FmvDmsKqDg==', 'CS7CgQ8g', 'w6PCiTotdlLDiUfDosKtHGBhw63DhQ8Ew5Q=', 'RsKDwpHCpcKjwrg=', 'F8KYYhMgayo9', 'Pg7CihEIXRU=', 'UMKRCBcpesKQGMKzwq7DqgciOz/Csw==', 'wrXDhMO1wr4m', 'wofDokDDoV8=', 'ZsO4ccOwwoQd', 'PMO/wrTDlV8=', 'w7fDh8K1wpM=', 'AWrDvVBh', 'esKtw49iEC7DtMKfwqnDoyrCqsOIwrRpw7Zgwro=', 'w73DjMObwqsqwoh8wo5xGMOw', 'OMKuwrJHw7fCpQ==', 'NUjDqGDDqcKMwr7DlcKOw4jDnsKRw7R5woPDrcOCahd3wr9sFmnDvw==', 'BEjDgMOYeA==', 'UcKXCAc=', 'wqhkH8KTwqo=', 'TMKodlrDlg==', 'W8KyBg==', 'BGnDuFdvwog=', 'VCodw5rDm8K3N3vCrVHDmsKpEF/CsxTCqFY=', 'Xx48', 'EcK/AcKIYQ==', 'TxY+wqg=', 'PcK2w4xyFg==', 'IsK5w5A=', 'dcKaLsKFZ0jDk8K4GEzCr8KCwrTChcKKU8ORJlEE', 'G3nDlcK7w6o=', 'GsOoWMKvwrA=', 'cMKmK3U=', 'wqptck/CmQ==', 'w7tRUw==', 'ZcKSARMJ', 'w4LDksOXwrUs', 'wqY0wo7DmxbChMOfIMO7KMODDcKa', 'bcK4CMOTwrzDjMKxwrBgEcKdTSx7RcO0w57Dk8OmIsKaVsO7wrgnfsKxw64rdiN6w5lVfn9lw6vDqQ==', 'PsKIKMKB', 'QcKewonCow==', 'ZcOHUQg=', 'wq3DvMOBwrE=', 'wpAnccK6Gg==', 'W8Opbzk=', 'fMK8Kn8=', 'wqHChTQna1nDlg==', 'TcKqMCTCjQ==', 'akE3OA==', 'w4ZBVDvCpg==', 'MsKHLcKG', 'V8KXBw8jZQ==', 'GsOzT8KY', 'cMO7UMOCwrY=', 'Zl42Mw==', 'w68bVH4Lw4fCiB7Ct0l5w6c=', 'BMOPIsOIwq8=', 'w6HCvxfDscKe', 'HcKXCBM5dsOJGcK/wq7Duh0jPCvCo8OdI1IGw4x8wqNwM14Qw5w=', 'w6VsG0Bow68SPgA=', 'XcKnG8K/YMOzT8KgwpPDuSpmwrc=', 'V8OWwqzDvS4=', 'w6gZS1snw5zCnQ==', 'YMOvYMOtwo8Uw4PDhQPCiF7CusKGworCnMOqwowiUMKqCsOsY8Od', 'b8OPXQEEwpM=', 'w7VgAlhBw6dcOxLCtUTCiwd+wpQfOEg=', 'w50iw7sEw60HwpPDmw==', 'wrI5UwQ=', 'wrYKwrwtwpY=', 'w7NKGnZW', 'w7nCpMKowqE=', 'wp3CpQYX', 'AMOeYMKhwp93w4A=', 'w6xaXjrCicK/f8OwPQ==', 'U8KTwo7CpcKjwqfCiErDgsOFwqvDpA==', 'woI7wqUJwqzCm3VNIg==', 'VyjDr8KXwpc=', 'LFHDgcOTbR/DtsOlwociC8OPecOqJhM=', 'fU7Do2/DuMKGwqXClg==', 'wpnDicOnwqfDgA==', 'UMKGKgXCsA==', 'ZFnDn8OYfR3DtsO9woclE8KHLcK2JARNw6UqLXfCjwfDhsO8YB9YMBY=', 'Zz12wpQ=', 'w6zCshXDpw==', 'C8KeLMKAcw==', 'wqzCpgDCtw==', 'bMKbf1DDhQ==', 'ZcKmP3TCqHEy', 'RsKDIlLCrg==', 'w6EdVn8=', 'wp4SwpTDmAU=', 'w4vCtSHDkMKS', 'T8KIPBTCpA==', 'w7kZw7Ejw54=', 'M8O6wqvDkw==', 'esO4Y8Oswp4=', 'JcKdU1XDgS/Ds8OOPMKGwpp/JcKewqXChU89IXPCoVHDrMKiT8OJw4LDpMO3Mi7CoMKUQcOCQsKwSWB/w4sRRcKuw7zDkMOcwqDCqwbCqA==', 'ZcKYMlfCrw==', 'W8O4wrzDoSk=', 'Y8KtYxAz', 'wr3CiycmbEPDuHc=', 'akY6MUw=', 'wpJ5dX0=', 'GcOgVMKMbsKMw6M=', 'M8Kqw5NyEkrDgw==', 'UMKfwo7CuQ==', 'w6PCpwzDsA==', 'b8OHSAxGwpXChzpxbcOs', 'QQs9wqA=', 'C8ODbsKwwoY0w48lFzE=', 'DMOjwr7DsHE=', 'w7nDgsOOwqkowpl2wqY=', 'DnzDmcKv', 'EMO8DcOtwqjCr8Oofw==', 'YMKMAsKuRQ==', 'wrJIS2/CoQ==', 'MhrDqsK6wr0oNzwSGH4ow4bCjsOXFyg=', 'OsOwICfCvyc=', 'ZMK6IiHCu3zDkXNtw4/ChcKtw4oPDiU=', 'w7HCthTDp8KYw7tsHV95PRTCsw==', 'YsK9KA3CpXDDoHFPw5/CgcKPw4gC', 'ScK1BsKbYsOpdcKmwojDgSBw', 'KMKzwpFvw7E=', 'f8KDwp7Cvg==', 'LsKxwpbDgyExw60=', 'LsOXbMKASw==', 'wojDjcOqwqnDpg==', 'UMKSw5rDr8O6w6XCtl/DjsOJw7A=', 'TcKPwpPCpMKBwrjCqlrDnw==', 'w7jCu03CuMOCC2jCv8Kvwo5cQkl3wr7Dr8OUdx7DksOYNcOXGglWwonDl8KNLnkawrXDocKBEsOgw6jDpMKBFcO5WzkPFQ==', 'KMK2Kj7CvG3CrnZjw4nClMOOw48IHTvDsMK2wqcuwpHCoxFXIzrCgWw=', 'asKYAMK8SQ==', 'w4PDgMKSwoIY', 'wrvDh8K1wocjw7ZrKFkxbEHDog52wpzCtAopahAzXzTDkMKzw5Ec', 'PF/DgQ==', 'DHDDhMKsw4fCt8KQTsKo', 'HsKwwrxEw4Q=', 'asKRXV/DnCTDug==', 'KwzCk1kcSgRnL8KAOsO8w7UZYRFZZMKHcTFaw4PCnlUWVn9/bcOrcF3Dnw==', 'TsKvwodDcA==', 'Y8OyworDmAQ=', 'w6rCqBnCqcOLDzvDosOhw55GQ0gy', 'w5vDl8KRwrga', 'wqDChSAwZ1vDlFLCucKl', 'BnvDisKONQ==', 'w5Qjw5k7w7o=', 'GGfDh3x7', 'J2bDi8Kxw7XCu8Kb', 'w69VUFdZ', 'w6jDsGjDrkdKw5LDusKRwoBfAEXDpcK+GlfCq8ObKsOUwp/Cr8OawovCpcOQbMKuSAs=', 'wp0OUcKKLg==', 'C8ODbsKwwoY0w4A/HyfCmQ==', 'w5bDhMKMwoU7', 'woUywrcbwpY=', 'IETDonVZ', 'w51cem98', 'UcKPwrPCvcKA', 'ZlwUCW8=', 'QsKlIwbCng==', 'wporwrEKwps=', 'f8OtwrbDkSE=', 'w6/DrMOlwrwX', 'wrBEBMKswpg=', 'CmnDsWV5', 'QMKRFBc=', 'TsKiDHrChg==', 'UsKPwo1nZA==', 'SsO1wo/DoRA=', 'JcK5KyLCrXzDsTdmw47CgsKawosSHyvDoQ==', 'w5HDosKNwrQU', 'Qww/wqI=', 'C2LDlcKsw6LCsMKsU8K0wp9sMg==', 'w6rClDPDo8K9', 'wqoawrfDrRQ=', 'wqLCuMKgwqrDq8O7wofCkw==', 'G3/DhMKbw7c=', 'TsKBZRQscTI1YA/DgcKHw41sw55K', 'GMO6TMKqwrw=', 'YcKBfywn', 'w6sGX2o=', 'bUI1DWo=', 'F8OvQsOCLMKsB8Oj', 'w7PDi8OXwpwp', 'OFvDgMOYfgjDtsO6woc2EQ==', 'w6sTb30G', 'wp4nwpHDhw8=', 'w6ZPFXxr', 'LRwqw6LDvA==', 'BHPDulB+wpPDgmg=', 'w4fDlcO9woAC', 'wq3DrcO2wpch', 'F8OhG8KLccKqw5M=', 'wpvDgcOzwrrDuA==', 'wrcjwpPDnQ/DhsOBHsOsP8OfFsOFD181wq/Dqmk=', 'ZxfDlMK9wrE=', 'w4hhF8KQwr95wpHDuMOsSDIyRAJQw4rCs8KpwoRHwqwiMsKwAcKdMGFHMcKYFSM/wpc=', 'w6PCiBzDo8KPw64kHmBjJBDDt8KzX8OA', 'w7XCgBPDt8K9', 'YUc3OU0K', 'wpHDrsOFwoUa', 'e8OwwpXDhjQ=', 'ZMKQCiPCsQ==', 'wqMuwrAtwq8=', 'wqvDoMOcwqLDlsK8L1dAwpPDksOC', 'MV7DkcKqAg==', 'cl3DpmnDhg==', 'XsKXeBQsZAEqahTDhMKSw4Bhw5NbB8KFwrgEBm52QcOv', 'w4bDj8KDwpkg', 'fsKywqVGw6DDpgzDv3DDpR/Cl8KDD8O/wr9HRxXCgRB6', 'wolRw4/CtTc=', 'U8Ofwr/DhDM=', 'WcKbJQg8', 'woTDj3/DjGI=', 'w7QjfMK1D1NjBRnDrMKlw7F3w4xxY8KDDcKew5DCrMO0FMKuHsKvLw8Sw4lY', 'AcKWw5NTJQ==', 'wopCO8KKwr0=', 'cMKwwpLCgsKO', 'CcKJE8Oawqc=', 'U8KdwpTCpcKlwqLCmkfDgMORwqvDpA==', 'Z8KTwrpx', 'BAXCqTkj', 'VcKmbykN', 'wqxQAcKUwrM=', 'w63DisOZ', 'D2nDoUBvwpbDiGfDpMOV', 'dcKoLTrCqnHDnHJlw5HClMKc', 'woI6w7sZw6wpwo7DmmwY', 'Y8KXQS8F', 'w6XDisOKwqk=', 'ZsKVwrlnRURBIzbCtA==', 'V8OGZcOpwqA=', 'acK6AcKtSA==', 'fcOuwoDDnQ==', 'cBjDocKVwrUsNmI=', 'wopjcHDCoA==', 'b8KKDMKJQw==', 'fsO3wpPDlg==', 'wot9B8KPwr92woDCtMOqTA==', 'wpR3H8KTwqx/wqbCucO9WjM=', 'CmnDolZ4', 'I03Dv8OYZxk=', 'JcO2WsKNf8Oow4bCkhQfw75hS0HCqcOPXsKTw5PCmsKxfsKy', 'DcOVZcKGwpp4w5Q5', 'w6EAX3ctw4E=', 'LsKFKsKeTA==', 'wrE7wrLDvjA=', 'b8KYFWvCog==', 'w6XCtgzDjMKUw6tsO2tcMBLCu8K3', 'wr/DusOSwqXDg8K8O19TwprDk8ORwrbDmMOoFXzDv2Q=', 'ScKEwo3CpMKywpHCq07DgsOCw7PDpi4tIMKxHVjDo2A=', 'ZcO3fw==', 'w6bDkcO7wpgB', 'ZMKQwprCmcKR', 'KxjChzUDWRQ7', 'wqvDtMOIwrAFwr0=', 'w6FVUSXCuMKl', 'w6FgBw==', 'Tg0/wrkXwo/Dhg==', 'KVbDhMObbB/CvsOn', 'eU8hOEYQd8Kf', 'akY6MUwWW8K1', 'EMO1CMOtwq4=', 'w59eXVVX', 'eMOrwoLDlQM=', 'wr3CgzE=', 'A8O8E8OkwqTCusOCUA==', 'wrcjwpPDnQ/CosO1', 'KVbDhMObbA==', 'Q8KCwpTCvcKi', 'w6oBUn8s', 'wqfCugTCt8OKGH7Cog==', 'w6fCqwzDp8KVw6s=', 'Ol/Dn8OSZhnCksON', 'wqDDtcOFwrgE', 'ZcK3LSLCrQ==', 'EnPDp1s=', 'PMKbJMKccmLDow==', 'CiwLw54=', 'OWfDi8OzTg==', 'JMOaLMOCwrk=', 'YMKxZUvDpA==', 'BsKRwqBzw5A=', 'w6oBUn8sw53CjAI=', 'w59eXVVXwrvCt1w=', 'woMxwqQY', 'Shc5wqADwrTDp8Kn', 'wrM5wpXDhBvCmcOUEQ==', 'w67CthbDpcKPw6c=', 'OVHDn8OD', 'ekjDrg==', 'IhPChiAc', 'wrnDu8Oe', 'b8KPHMKXdQ==', 'w7jDncKIwpU3', 'w6wxXlAH', 'M8K1wrNCw6bCrivDs2nDtA==', 'dcKjKmLCgA==', 'w7JhClhKw7IUJQ==', 'eMOJThk=', 'w4V0HcKQwr5/wpfDuMOwQDMjBwIPw4zCuQ==', 'd8KpwqTCs8KF', 'dxPDqcKywrw/aH0XAnlxwp/CiMOAFw==', 'QsKuSkvDvw==', 'wqJeJMK/wpg=', 'ZMOWWQM7wpXCkCY=', 'wqLDr8OYwpAJwrLDt3bCmQ==', 'w7TDnMKvwrM/w6MqK1c=', 'wrTDp8OcwrTDmsO/LA==', 'bjlrwrDClFvCkQ==', 'w7HCqgvDtsKew6JOC315IU/CvcK/Tw==', 'fsOfaiUS', 'AWrDu0Bv', 'MsOgwo7DlFU=', 'wrzDt3XDow==', 'w75JTDbCqcKgUsO6PUh6w6Y=', 'RDrDmMKxw7fDpg=='];
(function(_0x2d2bfb, _0x4c3732) {
    var _0x4c61f8 = function(_0x2c03e6) {
        while (--_0x2c03e6) {
            _0x2d2bfb['push'](_0x2d2bfb['shift']());
        }
    };
    _0x4c61f8(++_0x4c3732);
}(_kod_0x2751, 0x13a));
var _kod_0x1667 = function(_0x33e419, _0x470030) {
    _0x33e419 = _0x33e419 - 0x0;
    var _0x2a227c = _kod_0x2751[_0x33e419];
    if (_kod_0x1667['ybdpVj'] === undefined) {
        (function() {
            var _0x42d4a2 = function() {
                var _0x2858e6;
                try {
                    _0x2858e6 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x4e2ace) {
                    _0x2858e6 = window;
                }
                return _0x2858e6;
            };
            var _0x2216a7 = _0x42d4a2();
            var _0x5af1c6 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x2216a7['atob'] || (_0x2216a7['atob'] = function(_0x586dbc) {
                var _0x1c799d = String(_0x586dbc)['replace'](/=+$/, '');
                for (var _0x3e3214 = 0x0, _0x2e0a23, _0xd11d85, _0x4ec8f9 = 0x0, _0x432d71 = ''; _0xd11d85 = _0x1c799d['charAt'](_0x4ec8f9++); ~_0xd11d85 && (_0x2e0a23 = _0x3e3214 % 0x4 ? _0x2e0a23 * 0x40 + _0xd11d85 : _0xd11d85,
                _0x3e3214++ % 0x4) ? _0x432d71 += String['fromCharCode'](0xff & _0x2e0a23 >> (-0x2 * _0x3e3214 & 0x6)) : 0x0) {
                    _0xd11d85 = _0x5af1c6['indexOf'](_0xd11d85);
                }
                return _0x432d71;
            }
            );
        }());
        var _0x918cd4 = function(_0x254f76, _0x26bd46) {
            var _0x391675 = [], _0x146a06 = 0x0, _0x1bc5d3, _0x42ec16 = '', _0xa95553 = '';
            _0x254f76 = atob(_0x254f76);
            for (var _0x189c31 = 0x0, _0xa986ba = _0x254f76['length']; _0x189c31 < _0xa986ba; _0x189c31++) {
                _0xa95553 += '%' + ('00' + _0x254f76['charCodeAt'](_0x189c31)['toString'](0x10))['slice'](-0x2);
            }
            _0x254f76 = decodeURIComponent(_0xa95553);
            for (var _0x5430cc = 0x0; _0x5430cc < 0x100; _0x5430cc++) {
                _0x391675[_0x5430cc] = _0x5430cc;
            }
            for (_0x5430cc = 0x0; _0x5430cc < 0x100; _0x5430cc++) {
                _0x146a06 = (_0x146a06 + _0x391675[_0x5430cc] + _0x26bd46['charCodeAt'](_0x5430cc % _0x26bd46['length'])) % 0x100;
                _0x1bc5d3 = _0x391675[_0x5430cc];
                _0x391675[_0x5430cc] = _0x391675[_0x146a06];
                _0x391675[_0x146a06] = _0x1bc5d3;
            }
            _0x5430cc = 0x0;
            _0x146a06 = 0x0;
            for (var _0x2d40ee = 0x0; _0x2d40ee < _0x254f76['length']; _0x2d40ee++) {
                _0x5430cc = (_0x5430cc + 0x1) % 0x100;
                _0x146a06 = (_0x146a06 + _0x391675[_0x5430cc]) % 0x100;
                _0x1bc5d3 = _0x391675[_0x5430cc];
                _0x391675[_0x5430cc] = _0x391675[_0x146a06];
                _0x391675[_0x146a06] = _0x1bc5d3;
                _0x42ec16 += String['fromCharCode'](_0x254f76['charCodeAt'](_0x2d40ee) ^ _0x391675[(_0x391675[_0x5430cc] + _0x391675[_0x146a06]) % 0x100]);
            }
            return _0x42ec16;
        };
        _kod_0x1667['YCvWFx'] = _0x918cd4;
        _kod_0x1667['gdFJQL'] = {};
        _kod_0x1667['ybdpVj'] = !![];
    }
    var _0x59c986 = _kod_0x1667['gdFJQL'][_0x33e419];
    if (_0x59c986 === undefined) {
        if (_kod_0x1667['rSVqVZ'] === undefined) {
            _kod_0x1667['rSVqVZ'] = !![];
        }
        _0x2a227c = _kod_0x1667['YCvWFx'](_0x2a227c, _0x470030);
        _kod_0x1667['gdFJQL'][_0x33e419] = _0x2a227c;
    } else {
        _0x2a227c = _0x59c986;
    }
    return _0x2a227c;
};
define(_kod_0x1667('0x0', 'l#5U'), ['./tpl/group.html'], function(_0x470692, _0x4dbbce) {
    var _0x452035 = {};
    _0x452035['DPvpJ'] = function(_0xf032f9, _0x19e86e) {
        return _0xf032f9 !== _0x19e86e;
    }
    ;
    _0x452035[_kod_0x1667('0x1', 'u&B0')] = function(_0x124a6b, _0x40898c) {
        return _0x124a6b(_0x40898c);
    }
    ;
    _0x452035[_kod_0x1667('0x2', 'Mys3')] = _kod_0x1667('0x3', '6ded');
    _0x452035[_kod_0x1667('0x4', '0sXy')] = 'mouseenter';
    _0x452035['UHcfB'] = _kod_0x1667('0x5', '!%8R');
    _0x452035[_kod_0x1667('0x6', 'I%As')] = _kod_0x1667('0x7', '$ul^');
    _0x452035['lmfdV'] = function(_0x3305f4, _0x57ac0e) {
        return _0x3305f4 + _0x57ac0e;
    }
    ;
    _0x452035[_kod_0x1667('0x8', 'i]Tn')] = _kod_0x1667('0x9', 'B#xx');
    _0x452035[_kod_0x1667('0xa', 'EJ7T')] = _kod_0x1667('0xb', 'I&Yh');
    _0x452035[_kod_0x1667('0xc', 'G!%%')] = _kod_0x1667('0xd', 'bZ8t');
    _0x452035[_kod_0x1667('0xe', '0sXy')] = function(_0xdc31a1, _0x38242e) {
        return _0xdc31a1 >= _0x38242e;
    }
    ;
    _0x452035['DHGxZ'] = function(_0x267c91, _0x5c7310) {
        return _0x267c91 * _0x5c7310;
    }
    ;
    _0x452035['HGVgW'] = function(_0x241a60, _0x5bc4a7, _0xf0f365) {
        return _0x241a60(_0x5bc4a7, _0xf0f365);
    }
    ;
    _0x452035[_kod_0x1667('0xf', '$I6N')] = _kod_0x1667('0x10', 'i]Tn');
    _0x452035[_kod_0x1667('0x11', 'EJ7T')] = _kod_0x1667('0x12', '8#&X');
    _0x452035['yWPzG'] = 'folder-list-tree';
    _0x452035[_kod_0x1667('0x13', 'PkRf')] = function(_0x398378, _0x48b2dc) {
        return _0x398378(_0x48b2dc);
    }
    ;
    _0x452035[_kod_0x1667('0x14', 'QzwH')] = '.select-group';
    _0x452035[_kod_0x1667('0x15', '$I6N')] = function(_0xef31ab, _0x474dfe) {
        return _0xef31ab < _0x474dfe;
    }
    ;
    _0x452035[_kod_0x1667('0x16', 'Mys3')] = function(_0x52978c, _0x803f75) {
        return _0x52978c(_0x803f75);
    }
    ;
    _0x452035['sYfDF'] = function(_0x9f2462, _0x111100) {
        return _0x9f2462 === _0x111100;
    }
    ;
    _0x452035['WGMCs'] = _kod_0x1667('0x17', 'qKdP');
    _0x452035[_kod_0x1667('0x18', 'Trf[')] = function(_0x15991f, _0x79d584) {
        return _0x15991f > _0x79d584;
    }
    ;
    _0x452035[_kod_0x1667('0x19', 'i]Tn')] = function(_0x5ba5bc, _0x2ec61e) {
        return _0x5ba5bc == _0x2ec61e;
    }
    ;
    _0x452035['UMsxt'] = _kod_0x1667('0x1a', '5R^l');
    _0x452035[_kod_0x1667('0x1b', 'L8W@')] = function(_0x547d4a, _0x41b958) {
        return _0x547d4a < _0x41b958;
    }
    ;
    _0x452035['eXeCO'] = function(_0x344536, _0xc059cf) {
        return _0x344536 > _0xc059cf;
    }
    ;
    _0x452035[_kod_0x1667('0x1c', 'u&B0')] = function(_0x10cfb5, _0x56cc5b) {
        return _0x10cfb5 * _0x56cc5b;
    }
    ;
    _0x452035[_kod_0x1667('0x1d', 'Mys3')] = _kod_0x1667('0x1e', 'QzwH');
    _0x452035[_kod_0x1667('0x1f', '0sXy')] = 'LwFkX';
    _0x452035['uyVHy'] = _kod_0x1667('0x20', 'zz!z');
    _0x452035['kjFXa'] = _kod_0x1667('0x21', 'B#xx');
    _0x452035[_kod_0x1667('0x22', 'RbcT')] = '.context-menu-list';
    _0x452035[_kod_0x1667('0x23', 'MXUG')] = _kod_0x1667('0x24', 'zEUl');
    _0x452035[_kod_0x1667('0x25', 'B#xx')] = _kod_0x1667('0x26', '#7wY');
    _0x452035[_kod_0x1667('0x27', 'bZ8t')] = '.user-setting-more';
    _0x452035[_kod_0x1667('0x28', '#7wY')] = _kod_0x1667('0x29', 'DAQG');
    _0x452035[_kod_0x1667('0x2a', 'PkRf')] = _kod_0x1667('0x2b', 'nzU!');
    _0x452035[_kod_0x1667('0x2c', 'qKdP')] = _kod_0x1667('0x2d', 'CA[[');
    _0x452035[_kod_0x1667('0x2e', 'DAQG')] = function(_0x3ed97b, _0x4d427f) {
        return _0x3ed97b(_0x4d427f);
    }
    ;
    _0x452035[_kod_0x1667('0x2f', 'MXUG')] = 'click';
    _0x452035[_kod_0x1667('0x30', 'pGmg')] = function(_0x76d208, _0x27c6a1) {
        return _0x76d208 == _0x27c6a1;
    }
    ;
    _0x452035[_kod_0x1667('0x31', 'sCw$')] = function(_0x209faa) {
        return _0x209faa();
    }
    ;
    _0x452035['QfssI'] = _kod_0x1667('0x32', 'i]Tn');
    _0x452035['pJUOv'] = function(_0x36f180, _0x16fe44) {
        return _0x36f180 == _0x16fe44;
    }
    ;
    _0x452035[_kod_0x1667('0x33', 'qKdP')] = function(_0x6f269e, _0x48414b) {
        return _0x6f269e(_0x48414b);
    }
    ;
    _0x452035['RwjEG'] = '#group-parent-select';
    _0x452035['IlAbT'] = 'input[name=parentID]';
    _0x452035['GjTbZ'] = function(_0x580840, _0x455a77) {
        return _0x580840(_0x455a77);
    }
    ;
    _0x452035[_kod_0x1667('0x34', '9vFn')] = _kod_0x1667('0x35', '22[E');
    _0x452035[_kod_0x1667('0x36', 'LOZh')] = _kod_0x1667('0x37', 'MXUG');
    _0x452035[_kod_0x1667('0x38', 'Z0sl')] = _kod_0x1667('0x39', 'Trf[');
    _0x452035['KIlqd'] = _kod_0x1667('0x3a', 'RbcT');
    _0x452035['twxme'] = function(_0x37b1a8, _0x2c6833) {
        return _0x37b1a8 >= _0x2c6833;
    }
    ;
    _0x452035[_kod_0x1667('0x3b', 'RbcT')] = _kod_0x1667('0x3c', 'PkRf');
    _0x452035[_kod_0x1667('0x3d', '9vFn')] = _kod_0x1667('0x3e', 'Mys3');
    _0x452035[_kod_0x1667('0x3f', 'QzwH')] = function(_0x29386b, _0x2b89b7) {
        return _0x29386b !== _0x2b89b7;
    }
    ;
    _0x452035[_kod_0x1667('0x40', '$I6N')] = 'error';
    _0x452035['kGlFi'] = _kod_0x1667('0x41', 'LOZh');
    _0x452035[_kod_0x1667('0x42', 'I%As')] = function(_0x10a353) {
        return _0x10a353();
    }
    ;
    _0x452035[_kod_0x1667('0x43', '1#R$')] = function(_0x4e40cd, _0x22fd2b) {
        return _0x4e40cd != _0x22fd2b;
    }
    ;
    _0x452035['QTuOE'] = _kod_0x1667('0x44', '#7wY');
    _0x452035[_kod_0x1667('0x45', '0sXy')] = _kod_0x1667('0x46', 'Sn)k');
    _0x452035[_kod_0x1667('0x47', 'x0Xa')] = _kod_0x1667('0x48', 'Mys3');
    _0x452035['Pwgiq'] = '.group-size';
    _0x452035[_kod_0x1667('0x49', '5R^l')] = function(_0x3c8bba, _0x3b9f8c) {
        return _0x3c8bba + _0x3b9f8c;
    }
    ;
    _0x452035[_kod_0x1667('0x4a', 'I&Yh')] = _kod_0x1667('0x4b', 'G!%%');
    _0x452035[_kod_0x1667('0x4c', 'u(j9')] = function(_0x2b6c6b, _0x426cdd) {
        return _0x2b6c6b(_0x426cdd);
    }
    ;
    _0x452035[_kod_0x1667('0x4d', 'Trf[')] = '.size-max-set\x20input';
    _0x452035[_kod_0x1667('0x4e', '8#&X')] = 'VnIuN';
    var _0x2a9752, _0x21b133, _0x37c1be, _0x3dcddc, _0x3ab81d = function() {
        var _0x3fa3ca = {};
        _0x3fa3ca['xHdID'] = function(_0x545dc1, _0x1040b6) {
            return _0x545dc1(_0x1040b6);
        }
        ;
        _0x3fa3ca[_kod_0x1667('0x4f', 'OuGW')] = _kod_0x1667('0x50', '8#&X');
        _0x3317a3(),
        _0x331941(),
        $(_0x452035['qlokD'])['die']('mouseenter')[_kod_0x1667('0x51', 'u&B0')](_0x452035[_kod_0x1667('0x52', 'l#5U')], function() {
            _0x3fa3ca[_kod_0x1667('0x53', '#7wY')]($, this)['addClass'](_0x3fa3ca[_kod_0x1667('0x54', 'Trf[')]);
        })[_kod_0x1667('0x55', 'qKdP')]('mouseleave')['live'](_kod_0x1667('0x56', 'i]Tn'), function() {
            $(this)['removeClass'](_kod_0x1667('0x57', 'QzwH'));
        }),
        _0x452035['EUKWP']($, _kod_0x1667('0x58', '$ul^'))['die'](_0x452035[_kod_0x1667('0x59', '#7wY')])[_kod_0x1667('0x5a', 'qKdP')](_kod_0x1667('0x5b', 'u&B0'), function() {
            if (_0x452035[_kod_0x1667('0x5c', 'p09C')](_kod_0x1667('0x5d', 'nzU!'), 'SxnBI')) {
                window[_kod_0x1667('0x5e', 'Mys3')](core['versionUpdateVip']);
            } else {
                _0x452035['EUKWP']($, this)[_kod_0x1667('0x5f', 'Z0sl')](_kod_0x1667('0x60', 'B*85'));
            }
        })['die'](_0x452035[_kod_0x1667('0x61', 'nzU!')])[_kod_0x1667('0x62', 'Mys3')](_kod_0x1667('0x63', 'Trf['), function() {
            $(this)[_kod_0x1667('0x64', 'Trf[')](_kod_0x1667('0x65', 'i]Tn'));
        }),
        G[_kod_0x1667('0x66', 'CA[[')] || $(_kod_0x1667('0x67', '22[E'))[_kod_0x1667('0x68', 'bZ8t')](_kod_0x1667('0x69', 'DAQG'));
    }, _0x2ade4d = {}, _0x32246b = function(_0x4ef862, _0x14f497) {
        if (_0x452035[_kod_0x1667('0x6a', '$RVi')] !== _0x452035[_kod_0x1667('0x6b', 'MXUG')]) {
            if (_0x452035[_kod_0x1667('0x6c', 'L8W@')] == _0x4ef862) {
                _0x3dcddc = _0x14f497;
                var _0x21b133 = _0x2a9752[_kod_0x1667('0x6d', 'RbcT')]('id', _0x14f497, null);
                _0x2a9752['selectNode'](_0x21b133),
                _0x15e739(_0x14f497);
            } else
                _kod_0x1667('0x6e', 'LOZh') == _0x4ef862 && ($(_kod_0x1667('0x6f', '8#&X'))[_kod_0x1667('0x70', 'p09C')](_0x14f497),
                _0x452035[_kod_0x1667('0x71', 'qKdP')]($, _0x452035[_kod_0x1667('0x72', '8#&X')])[_kod_0x1667('0x73', 'l#5U')](_kod_0x1667('0x74', '9vFn')),
                _0x269b7f());
        } else {
            for (var _0x1e3834 = 0x0; _0x1e3834 < _0x4ef862[_kod_0x1667('0x75', 'nwh2')]; _0x1e3834++)
                void 0x0 != _0x4ef862[_0x1e3834] ? (_0x4ef862[_0x1e3834][_kod_0x1667('0x76', 'pGmg')] = _0x4ef862[_0x1e3834]['parentID'],
                _0x4ef862[_0x1e3834]['id'] = _0x4ef862[_0x1e3834][_kod_0x1667('0x77', 'zz!z')],
                delete _0x4ef862[_0x1e3834][_kod_0x1667('0x78', 'CA[[')],
                delete _0x4ef862[_0x1e3834][_kod_0x1667('0x79', 'PkRf')],
                delete _0x4ef862[_0x1e3834]['groupID'],
                _0x4ef862[_0x1e3834]['child'] && (_0x4ef862[_0x1e3834][_kod_0x1667('0x7a', 'PkRf')] = _0x4ef862[_0x1e3834][_kod_0x1667('0x7b', '0KEm')],
                delete _0x4ef862[_0x1e3834][_kod_0x1667('0x7c', 'EJ7T')],
                _0x14f497(_0x4ef862[_0x1e3834]['children']))) : delete _0x4ef862[_0x1e3834];
        }
    }, _0x512095 = function(_0x189ba5) {
        var _0x4dbbce = function(_0x278486) {
            for (var _0x2a9752 = 0x0; _0x452035[_kod_0x1667('0x7d', 'Mys3')](_0x2a9752, _0x278486['length']); _0x2a9752++)
                void 0x0 != _0x278486[_0x2a9752] ? (_0x278486[_0x2a9752][_kod_0x1667('0x7e', '!%8R')] = _0x278486[_0x2a9752][_kod_0x1667('0x7f', '0KEm')],
                _0x278486[_0x2a9752]['id'] = _0x278486[_0x2a9752]['groupID'],
                delete _0x278486[_0x2a9752]['children'],
                delete _0x278486[_0x2a9752]['parentID'],
                delete _0x278486[_0x2a9752][_kod_0x1667('0x80', 'MXUG')],
                _0x278486[_0x2a9752][_kod_0x1667('0x81', 'CA[[')] && (_0x278486[_0x2a9752]['children'] = _0x278486[_0x2a9752][_kod_0x1667('0x82', '8#&X')],
                delete _0x278486[_0x2a9752][_kod_0x1667('0x83', 'DAQG')],
                _0x452035['msSba'](_0x4dbbce, _0x278486[_0x2a9752][_kod_0x1667('0x84', '6ded')]))) : delete _0x278486[_0x2a9752];
        }
          , _0x2a9752 = []
          , _0x21b133 = $[_kod_0x1667('0x85', 'RbcT')](!0x0, {}, _0x189ba5);
        for (var _0x37c1be in _0x21b133) {
            var _0x3dcddc = _0x21b133[_0x37c1be]
              , _0x3ab81d = _0x3dcddc[_kod_0x1667('0x86', 'CA[[')];
            if (_0x21b133[_0x3ab81d])
                _0x21b133[_0x3ab81d]['child'] || (_0x21b133[_0x3ab81d][_kod_0x1667('0x87', '9vFn')] = []),
                _0x21b133[_0x3ab81d][_kod_0x1667('0x88', 'QzwH')][_kod_0x1667('0x89', 'i]Tn')](_0x21b133[_0x3dcddc['groupID']]);
            else {
                var _0x2ade4d = _0x21b133[_0x3dcddc[_kod_0x1667('0x8a', '$RVi')]];
                _0x2ade4d && _0x2a9752[_kod_0x1667('0x8b', 'sCw$')](_0x2ade4d);
            }
        }
        var _0x32246b = function(_0x446c0f, _0x261938) {
            if (_0x452035[_kod_0x1667('0x8c', 'CA[[')](_0x452035[_kod_0x1667('0x8d', '0KEm')], _kod_0x1667('0x8e', 'I(@H'))) {
                _0x446c0f[_kod_0x1667('0x84', '6ded')] && _0x452035[_kod_0x1667('0x8f', 'Sn)k')](_0x446c0f[_kod_0x1667('0x90', 'DAQG')]['length'], 0x0) && _0x446c0f[_kod_0x1667('0x91', 'EJ7T')][_kod_0x1667('0x92', '$I6N')](_0x32246b),
                _0x261938[_kod_0x1667('0x93', 'zz!z')] && _0x452035['VVvPB'](_0x261938[_kod_0x1667('0x94', 'MXUG')][_kod_0x1667('0x95', 'RbcT')], 0x0) && _0x261938['children'][_kod_0x1667('0x96', 'CA[[')](_0x32246b);
                var _0x2a9752 = G['settings']['orderSort'] || _kod_0x1667('0x97', '1#R$')
                  , _0x21b133 = _0x452035[_kod_0x1667('0x98', 'l#5U')](_kod_0x1667('0x99', 'LOZh'), _0x2a9752) ? 0x1 : -0x1
                  , _0x37c1be = _0x446c0f && _0x446c0f['sort'] ? _0x452035[_kod_0x1667('0x9a', 'nzU!')] : 'name';
                return _0x452035['XmIkc'](_0x452035[_kod_0x1667('0x9b', '0sXy')](parseInt, _0x446c0f[_0x37c1be]), parseInt(_0x261938[_0x37c1be])) ? -0x1 * _0x21b133 : _0x452035[_kod_0x1667('0x9c', 'DAQG')](parseInt(_0x446c0f[_0x37c1be]), _0x452035['msSba'](parseInt, _0x261938[_0x37c1be])) ? _0x452035['YuAsD'](0x1, _0x21b133) : (_0x37c1be = _kod_0x1667('0x9d', 'Sn)k'),
                parseInt(_0x446c0f[_0x37c1be]) < parseInt(_0x261938[_0x37c1be]) ? -0x1 : parseInt(_0x446c0f[_0x37c1be]) > parseInt(_0x261938[_0x37c1be]) ? 0x1 : 0x0);
            } else {
                _0x3dcddc[_kod_0x1667('0x9e', 'L8W@')]();
            }
        };
        return _0x4dbbce(_0x2a9752),
        _0x2a9752[0x0]['children'] && _0x2a9752[0x0][_kod_0x1667('0x9f', 'pGmg')][_kod_0x1667('0xa0', 'PUWp')](_0x32246b),
        _0x2a9752;
    }, _0x331941 = function() {
        var _0x5a1fe1 = {};
        _0x5a1fe1['JwrXM'] = _kod_0x1667('0xa1', 'Trf[');
        _0x5a1fe1[_kod_0x1667('0xa2', '8#&X')] = _kod_0x1667('0xa3', 'Z0sl');
        if (_0x452035[_kod_0x1667('0xa4', 'I(@H')]('LwFkX', _0x452035[_kod_0x1667('0xa5', 'Trf[')])) {
            System[_kod_0x1667('0xa6', 'PUWp')](_0x4dbbce);
        } else {
            var _0x470692 = $[_kod_0x1667('0xa7', '9vFn')]['loading'] && $[_kod_0x1667('0xa8', '0sXy')][_kod_0x1667('0xa9', 'LOZh')]();
            $['ajax']({
                'url': G[_kod_0x1667('0xaa', 'pzy2')] + _kod_0x1667('0xab', 'RbcT'),
                'dataType': _0x452035[_kod_0x1667('0xac', 'PUWp')],
                'error': function() {
                    _0x470692 && _0x470692[_kod_0x1667('0xad', 'i]Tn')](),
                    _0x452035[_kod_0x1667('0xae', '8CSp')]($, _0x452035['XkjRP'])[_kod_0x1667('0xaf', 'I&Yh')]('<div\x20style=\x22text-align:center;\x22>' + LNG[_kod_0x1667('0xb0', 'nwh2')] + _kod_0x1667('0xb1', 'B#xx'));
                },
                'success': function(_0x5b3c29) {
                    if (_0x470692 && _0x470692['close'](),
                    !_0x5b3c29['code'])
                        return void $(_0x5a1fe1[_kod_0x1667('0xb2', 'Sn)k')])['html'](_kod_0x1667('0xb3', 'I%As') + LNG[_kod_0x1667('0xb0', 'nwh2')] + _kod_0x1667('0xb4', '8CSp'));
                    _0x37c1be = core[_kod_0x1667('0xb5', '1#R$')](_0x5b3c29, _kod_0x1667('0xb6', 'PUWp'));
                    var _0x3ab81d = {};
                    if (core[_kod_0x1667('0xb7', 'u(j9')] == String['fromCharCode'](0x41))
                        for (var _0x331941 in _0x37c1be) {
                            _0x3ab81d[_0x331941] = _0x37c1be[_0x331941],
                            _0x37c1be = _0x3ab81d;
                            break;
                        }
                    _0x21b133 = _0x512095(_0x37c1be),
                    $['fn'][_kod_0x1667('0xb8', 'Trf[')]['init']($(_kod_0x1667('0xb9', 'OuGW')), _0x2ade4d, _0x21b133),
                    _0x2a9752 = $['fn'][_kod_0x1667('0xba', 'B*85')]['getZTreeObj'](_0x5a1fe1[_kod_0x1667('0xbb', 'pGmg')]);
                    var _0x2de382 = _0x2a9752[_kod_0x1667('0xbc', 'I&Yh')]();
                    _0x2a9752[_kod_0x1667('0xbd', 'qKdP')](_0x2de382[0x0], !0x0),
                    void 0x0 == _0x3dcddc && (_0x3dcddc = '1'),
                    _0x32246b(_kod_0x1667('0xbe', 'LOZh'), _0x3dcddc),
                    0x0 != $(_kod_0x1667('0xbf', 'sCw$'))['length'] && _0x3c2544();
                }
            });
        }
    }, _0x2de382 = function() {
        if (_kod_0x1667('0xc0', 'I(@H') === _kod_0x1667('0xc1', 'PkRf')) {
            _0x452035[_kod_0x1667('0xc2', 'I(@H')]($, _0x452035[_kod_0x1667('0xc3', 'PkRf')])[_kod_0x1667('0xc4', 'pzy2')](_0x452035[_kod_0x1667('0xc5', '0KEm')])['trigger'](_0x452035['cjxCv']);
        } else {
            $(this)['removeClass'](_0x452035[_kod_0x1667('0xc6', 'bZ8t')]);
        }
    }, _0x3317a3 = function() {
        var _0x2cffc1 = {};
        _0x2cffc1['aZtKd'] = 'pbwhO';
        _0x2cffc1[_kod_0x1667('0xc7', 'EJ7T')] = 'add-child';
        _0x2cffc1[_kod_0x1667('0xc8', 'DAQG')] = function(_0x1bc6fa, _0x2acbbd) {
            return _0x1bc6fa(_0x2acbbd);
        }
        ;
        _0x2cffc1['QWrPT'] = _0x452035.tKMoJ;
        _0x2cffc1['TkJbg'] = _kod_0x1667('0xc9', 'B#xx');
        _0x2cffc1['DCXAD'] = _kod_0x1667('0xca', '$RVi');
        $(_0x452035['LotLn'])[_kod_0x1667('0xcb', '0KEm')](_0x2de382)[_kod_0x1667('0xcc', 'zEUl')](_0x2de382),
        $[_kod_0x1667('0xcd', '9vFn')]({
            'zIndex': 0x270f,
            'selector': _kod_0x1667('0xce', 'i]Tn'),
            'items': {
                'add-child': {
                    'name': LNG[_kod_0x1667('0xcf', 'RbcT')],
                    'icon': _kod_0x1667('0xd0', 'I(@H'),
                    'accesskey': 'u'
                },
                'edit': {
                    'name': LNG['edit'],
                    'icon': _kod_0x1667('0xd1', 'u&B0'),
                    'accesskey': 'e'
                },
                'sep1': _0x452035[_kod_0x1667('0xd2', '$ul^')],
                'add-user': {
                    'name': LNG[_kod_0x1667('0xd3', '0KEm')],
                    'icon': _kod_0x1667('0xd4', 'u&B0'),
                    'accesskey': 'g'
                },
                'sep2': _0x452035[_kod_0x1667('0xd5', 'x0Xa')],
                'remove': {
                    'name': LNG[_kod_0x1667('0xd6', 'u(j9')],
                    'icon': _0x452035[_kod_0x1667('0xd7', '$I6N')],
                    'accesskey': 'r'
                }
            },
            'callback': function(_0x8806af, _0xc8b3a1) {
                if ('ApiYG' !== _0x2cffc1['aZtKd']) {
                    var _0x21b133 = _0xc8b3a1[_kod_0x1667('0xd8', 'QzwH')][_kod_0x1667('0xd9', 'L8W@')]('id');
                    _0x21b133 = _0x21b133[_kod_0x1667('0xda', '22[E')]('_a', '');
                    var _0x37c1be = _0x2a9752[_kod_0x1667('0xdb', 'sCw$')](_0x21b133);
                    switch (_0x8806af) {
                    case _0x2cffc1[_kod_0x1667('0xdc', 'l#5U')]:
                        var _0x3dcddc = _0x10f748();
                        _0x3dcddc['parentID'] = _0x37c1be['id'],
                        _0x44afe6(_0x3dcddc);
                        break;
                    case _kod_0x1667('0xdd', '22[E'):
                        var _0x3dcddc = _0x10f748(_0x37c1be['id']);
                        _0x2cffc1['nZsNQ'](_0x44afe6, _0x3dcddc);
                        break;
                    case 'add-user':
                        System[_kod_0x1667('0xde', 'I(@H')][_kod_0x1667('0xdf', 'Mys3')](_0x37c1be['id']);
                        break;
                    case _kod_0x1667('0xe0', '8CSp'):
                        _0x235a0c(_0x37c1be['id']);
                    }
                } else {
                    _0x32246b(_0x8806af, _0xc8b3a1['id']);
                }
            }
        }),
        _0x452035[_kod_0x1667('0xe1', 'PUWp')]($, _kod_0x1667('0xe2', '8CSp'))[_kod_0x1667('0xe3', '22[E')](_kod_0x1667('0xe4', '8#&X'))['live'](_0x452035[_kod_0x1667('0xe5', '$ul^')], function(_0x1aefd4) {
            if (_0x2cffc1[_kod_0x1667('0xe6', '8#&X')] === _kod_0x1667('0xe7', 'Sn)k')) {
                $(this)[_kod_0x1667('0xe8', 'I%As')]({
                    'x': _0x1aefd4['pageX'],
                    'y': _0x1aefd4['pageY']
                });
            } else {
                $(_0x2cffc1[_kod_0x1667('0xe9', '22[E')])[_kod_0x1667('0xea', 'u(j9')](_0x2cffc1['TkJbg']);
            }
        });
    }, _0x10f748 = function(_0x49751b) {
        return _0x452035[_kod_0x1667('0xeb', 'u(j9')](void 0x0, _0x49751b) ? _0x452035[_kod_0x1667('0xec', 'i]Tn')](_0x32ee07) : _0x37c1be[_0x49751b];
    }, _0x32ee07 = function() {
        return {
            'groupID': '',
            'name': '',
            'parentID': '',
            'children': '',
            'config': {
                'sizeMax': '0',
                'sizeUse': ''
            },
            'path': '',
            'createTime': ''
        };
    }, _0x235a0c = function(_0x3b732f, _0x1ca509) {
        var _0x2253a2 = {};
        _0x2253a2[_kod_0x1667('0xed', '$RVi')] = function(_0x5c2b19, _0x1c4438, _0x2cf03f) {
            return _0x5c2b19(_0x1c4438, _0x2cf03f);
        }
        ;
        _0x2253a2[_kod_0x1667('0xee', 'nwh2')] = function(_0x20c114) {
            return _0x20c114();
        }
        ;
        _0x2253a2[_kod_0x1667('0xef', '#7wY')] = _0x452035.QfssI;
        _0x2253a2['QZEYx'] = function(_0x416495, _0x55312c) {
            return _0x416495(_0x55312c);
        }
        ;
        if (_0x452035['DPvpJ'](_kod_0x1667('0xf0', '!%8R'), 'ethrr')) {
            var _0x21b133 = _0x2a9752[_kod_0x1667('0xf1', 'pzy2')]()[0x0]
              , _0x37c1be = _0x21b133[_kod_0x1667('0xf2', 'EJ7T')]()
              , _0x3dcddc = _0x452035['lmfdV'](G[_kod_0x1667('0xf3', 'zz!z')], _kod_0x1667('0xf4', '9vFn')) + _0x3b732f;
            $[_kod_0x1667('0xf5', 'CA[[')]({
                'id': _kod_0x1667('0xf6', 'Sn)k'),
                'fixed': !0x0,
                'icon': _kod_0x1667('0xf7', '6ded'),
                'title': LNG[_kod_0x1667('0xf8', 'PUWp')],
                'padding': 0x1e,
                'width': 0x12c,
                'lock': !0x0,
                'background': _kod_0x1667('0xf9', '!%8R'),
                'opacity': 0.3,
                'content': LNG['system_group_remove_tips'],
                'ok': function() {
                    $[_kod_0x1667('0xfa', '1#R$')]({
                        'url': _0x3dcddc,
                        'type': _kod_0x1667('0xfb', '6ded'),
                        'dataType': _kod_0x1667('0xfc', 'nzU!'),
                        'beforeSend': function() {
                            Tips[_kod_0x1667('0xfd', 'RbcT')]();
                        },
                        'error': core[_kod_0x1667('0xfe', 'Sn)k')],
                        'success': function(_0x32a0fa) {
                            Tips['close'](_0x32a0fa),
                            System[_kod_0x1667('0xff', 'QzwH')][_kod_0x1667('0x100', '$RVi')](),
                            _0x2253a2[_kod_0x1667('0x101', 'B#xx')](_0x32246b, 'folder-list-tree', _0x37c1be['id']),
                            _0x2253a2[_kod_0x1667('0x102', '6ded')](_0x331941),
                            _0x2253a2[_kod_0x1667('0x103', '8CSp')] == typeof _0x1ca509 && _0x2253a2[_kod_0x1667('0x104', 'nwh2')](_0x1ca509, _0x3b732f);
                        }
                    });
                },
                'cancel': !0x0
            });
        } else {
            var _0x14038a = _0x21b133[_0x3dcddc[_kod_0x1667('0x105', 'DAQG')]];
            _0x14038a && _0x2a9752['push'](_0x14038a);
        }
    }, _0x50cf66 = function() {
        var _0x470692 = 0x40000000 * _0x452035[_kod_0x1667('0x106', '!%8R')](parseFloat, $('.size-max-set\x20input')[_kod_0x1667('0x107', '$ul^')]())
          , _0x4dbbce = pathTools[_kod_0x1667('0x108', 'G!%%')](_0x470692);
        _0x452035[_kod_0x1667('0x109', 'pGmg')](0x0, _0x470692) || _0x452035['NvALD'](isNaN, _0x470692) ? _0x452035['NvALD']($, '.size-max-set\x20i')[_kod_0x1667('0x10a', '22[E')](LNG[_kod_0x1667('0x10b', '$I6N')]) : $(_kod_0x1667('0x10c', 'PUWp'))[_kod_0x1667('0x10d', 'Z0sl')](_0x4dbbce);
    }, _0x269b7f = function() {
        var _0x470692 = $(_0x452035[_kod_0x1667('0x10e', '$ul^')])
          , _0x4dbbce = $(_0x452035[_kod_0x1667('0x10f', 'i]Tn')])['val']();
        if (_0x470692['find'](_kod_0x1667('0x110', 'I(@H'))[_kod_0x1667('0x111', 'EJ7T')]('curSelectedNode'),
        '0' == _0x4dbbce || _0x452035[_kod_0x1667('0x112', 'p09C')]('', _0x4dbbce))
            return _0x452035[_kod_0x1667('0x113', '6ded')]($, _kod_0x1667('0x114', 'x0Xa'))[_kod_0x1667('0x115', 'Sn)k')](_0x452035[_kod_0x1667('0x116', '1#R$')]),
            !0x1;
        var _0x2a9752 = _0x452035[_kod_0x1667('0x117', 'Mys3')](_0x10f748, _0x4dbbce)
          , _0x21b133 = $['fn']['zTree']['getZTreeObj'](_0x452035[_kod_0x1667('0x118', 'l#5U')]);
        return _0x5a5b6b(_0x21b133, _0x4dbbce),
        $(_0x452035[_kod_0x1667('0x119', 'I&Yh')])[_kod_0x1667('0x11a', 'I(@H')](_0x2a9752[_kod_0x1667('0x11b', 'L8W@')]),
        _0x470692[_kod_0x1667('0x11c', 'l#5U')](_0x452035[_kod_0x1667('0x11d', 'bZ8t')](_0x452035['lmfdV'](_0x452035[_kod_0x1667('0x11e', 'zEUl')], _0x4dbbce), ']'))['addClass'](_kod_0x1667('0x11f', 'LOZh')),
        !0x0;
    }, _0x5a5b6b = function(_0x50f7c2, _0x3cb8c4) {
        var _0x42473d = {};
        _0x42473d[_kod_0x1667('0x120', 'pzy2')] = function(_0x13b269) {
            return _0x13b269();
        }
        ;
        if ('Apcpq' !== _kod_0x1667('0x121', 'DAQG')) {
            _0x42473d[_kod_0x1667('0x122', 'Sn)k')](_0x2ade4d);
        } else {
            for (var _0x2a9752 = [], _0x21b133 = _0x50f7c2[_kod_0x1667('0x123', 'I&Yh')]('id', _0x3cb8c4, null), _0x37c1be = _0x21b133; _0x21b133 = _0x21b133['getParentNode'](); )
                _0x2a9752['push'](_0x21b133);
            for (var _0x3dcddc = _0x2a9752[_kod_0x1667('0x124', '#7wY')] - 0x1; _0x452035[_kod_0x1667('0x125', 'l#5U')](_0x3dcddc, 0x0); _0x3dcddc--)
                _0x50f7c2['expandNode'](_0x2a9752[_0x3dcddc], !0x0);
            _0x50f7c2[_kod_0x1667('0x126', '0KEm')](_0x37c1be, !0x0);
        }
    }, _0x3c2544 = function() {
        var _0x470692 = $(_kod_0x1667('0x127', 'zEUl'));
        $['fn']['zTree'][_kod_0x1667('0x128', '22[E')](_0x470692, _0x2ade4d, _0x21b133);
        var _0x4dbbce = $['fn'][_kod_0x1667('0x129', '9vFn')][_kod_0x1667('0x12a', '$I6N')](_0x452035[_kod_0x1667('0x12b', '22[E')])
          , _0x2a9752 = _0x4dbbce[_kod_0x1667('0x12c', 'p09C')]();
        _0x4dbbce['expandNode'](_0x2a9752[0x0], !0x0),
        _0x269b7f() && $(_kod_0x1667('0x12d', '0sXy'))['unbind']('click')['bind'](_0x452035[_kod_0x1667('0x12e', '8#&X')], function() {
            $(_0x452035['DzgHW'])[_kod_0x1667('0x12f', 'zEUl')](_0x452035['wSkuF']);
        });
    }, _0x44afe6 = function(_0x28a342) {
        var _0x53d6e2 = {};
        _0x53d6e2[_kod_0x1667('0x130', 'pGmg')] = function(_0x1b25a5, _0x56e4c7) {
            return _0x1b25a5(_0x56e4c7);
        }
        ;
        _0x53d6e2[_kod_0x1667('0x131', 'PkRf')] = _0x452035.RsiQz;
        _0x53d6e2['CTuIE'] = function(_0x421639, _0x7ab99) {
            return _0x421639 === _0x7ab99;
        }
        ;
        _0x53d6e2[_kod_0x1667('0x132', 'qKdP')] = function(_0x451f43, _0x177120) {
            return _0x451f43(_0x177120);
        }
        ;
        _0x53d6e2['fsDpI'] = function(_0xda4626, _0x5d22fc) {
            return _0x452035.bONmx(_0xda4626, _0x5d22fc);
        }
        ;
        _0x53d6e2[_kod_0x1667('0x133', 'l#5U')] = _kod_0x1667('0x134', 'i]Tn');
        _0x53d6e2[_kod_0x1667('0x135', 'PUWp')] = function(_0x3d8270, _0x4c1082) {
            return _0x3d8270(_0x4c1082);
        }
        ;
        _0x53d6e2['lEPJY'] = function(_0x5dfb66, _0x2db9e2) {
            return _0x5dfb66 != _0x2db9e2;
        }
        ;
        _0x53d6e2[_kod_0x1667('0x136', '$RVi')] = function(_0x490fab, _0x2af586) {
            return _0x490fab(_0x2af586);
        }
        ;
        _0x53d6e2['Ggbaa'] = _0x452035.SpfAw;
        _0x53d6e2['EHINn'] = function(_0x2d98b0, _0x5775d6) {
            return _0x2d98b0 + _0x5775d6;
        }
        ;
        if (_kod_0x1667('0x137', 'u(j9') !== 'fnCsD') {
            var _0x2a9752 = _0x452035['GjTbZ'](_0x470692, _kod_0x1667('0x138', '5R^l'))
              , _0x21b133 = template[_kod_0x1667('0x139', '1#R$')](_0x2a9752)
              , _0x37c1be = _0x452035[_kod_0x1667('0x13a', 'Trf[')](_0x21b133, {
                'LNG': LNG,
                'groupInfo': _0x28a342
            })
              , _0x3dcddc = $[_kod_0x1667('0x13b', '8CSp')]({
                'id': _0x452035[_kod_0x1667('0x13c', 'x0Xa')],
                'simple': !0x0,
                'resize': !0x1,
                'width': 0x1a9,
                'background': '#000',
                'opacity': 0.1,
                'title': '',
                'padding': '0',
                'fixed': !0x0,
                'lock': !0x0,
                'content': _0x37c1be
            });
            _0x50cf66(),
            System[_kod_0x1667('0x13d', '0KEm')]($(_kod_0x1667('0x13e', 'nzU!'))),
            _0x452035[_kod_0x1667('0x13f', 'OuGW')](_0x3c2544),
            $('.input-line\x20input[name=name]')[_kod_0x1667('0x140', 'u&B0')]();
            var _0x3ab81d = _0x452035[_kod_0x1667('0x141', 'nwh2')](G[_kod_0x1667('0x142', 'Sn)k')], _kod_0x1667('0x143', 'DAQG'));
            if (_0x452035[_kod_0x1667('0x144', '0sXy')]('', _0x28a342[_kod_0x1667('0x145', 'pGmg')]))
                var _0x3ab81d = G[_kod_0x1667('0x146', 'nwh2')] + _0x452035[_kod_0x1667('0x147', '1#R$')] + _0x28a342[_kod_0x1667('0x148', '!%8R')];
            _0x452035[_kod_0x1667('0x149', 'B#xx')]($, _kod_0x1667('0x14a', '9vFn'))['unbind'](_kod_0x1667('0x14b', '0sXy'))['bind'](_0x452035[_kod_0x1667('0x14c', 'EJ7T')], function() {
                if (_0x53d6e2['CTuIE']('JtKKu', _kod_0x1667('0x14d', 'MXUG'))) {
                    _0x2ade4d();
                } else {
                    _0x53d6e2[_kod_0x1667('0x14e', '$I6N')]($, this)[_kod_0x1667('0x14f', 'B*85')]()[_kod_0x1667('0x150', 'B*85')](_0x53d6e2[_kod_0x1667('0x151', 'x0Xa')])[_kod_0x1667('0x152', 'Z0sl')]('');
                }
            }),
            _0x452035['GjTbZ']($, _kod_0x1667('0x153', 'Trf['))[_kod_0x1667('0x154', 'Z0sl')]('click')[_kod_0x1667('0x155', 'OuGW')]('click', function() {
                System[_kod_0x1667('0x156', 'l#5U')](_0x28a342);
            }),
            $(_kod_0x1667('0x157', 'L8W@'))[_kod_0x1667('0x158', 'Sn)k')]('click')['bind']('click', function() {
                _0x235a0c(_0x28a342[_kod_0x1667('0x159', 'L8W@')], function() {
                    _0x3dcddc['close']();
                });
            }),
            _0x452035['GjTbZ']($, _kod_0x1667('0x15a', 'Z0sl'))[_kod_0x1667('0x15b', 'Mys3')](function() {
                _0x2ade4d(!0x0);
            }),
            $(_kod_0x1667('0x15c', 'B#xx'))[_kod_0x1667('0x15d', 'QzwH')](_kod_0x1667('0x15e', '9vFn'))['bind'](_kod_0x1667('0x15f', 'I(@H'), function() {
                if (_0x53d6e2[_kod_0x1667('0x160', 'pzy2')](_kod_0x1667('0x161', '$I6N'), _0x53d6e2[_kod_0x1667('0x162', 'I%As')])) {
                    _0x53d6e2[_kod_0x1667('0x163', 'l#5U')]($, _kod_0x1667('0x164', '!%8R'))[_kod_0x1667('0x165', '8#&X')](_kod_0x1667('0x166', '#7wY'))[_kod_0x1667('0x167', 'l#5U')](_kod_0x1667('0x168', '5R^l'));
                } else {
                    _0x53d6e2[_kod_0x1667('0x169', '9vFn')](_0x2ade4d, !0x0);
                }
            }),
            $(_0x452035[_kod_0x1667('0x16a', 'I&Yh')])[_kod_0x1667('0x16b', 'p09C')](_kod_0x1667('0x16c', '8CSp'))[_kod_0x1667('0x16d', '0sXy')](_kod_0x1667('0x16e', 'i]Tn'), function() {
                $(_kod_0x1667('0x16f', 'u(j9'))[_kod_0x1667('0x170', 'qKdP')](_kod_0x1667('0x171', 'Sn)k'));
            }),
            $(_kod_0x1667('0x172', '1#R$'))['unbind'](_0x452035[_kod_0x1667('0x173', 'CA[[')])[_kod_0x1667('0x174', '5R^l')](_0x452035[_kod_0x1667('0x175', 'Trf[')], function() {
                var _0x483ffa = {};
                _0x483ffa[_kod_0x1667('0x176', 'I(@H')] = function(_0x4fa29c, _0x4be240) {
                    return _0x4fa29c(_0x4be240);
                }
                ;
                var _0x470692 = this;
                core[_kod_0x1667('0x177', 'nzU!')]['pathSelect']({
                    'type': _kod_0x1667('0x178', 'i]Tn'),
                    'title': LNG['path_api_select_folder'],
                    'firstPath': $(_kod_0x1667('0x179', 'sCw$'))[_kod_0x1667('0x17a', 'zz!z')]()
                }, function(_0x270435) {
                    _0x483ffa[_kod_0x1667('0x17b', '$RVi')]($, _0x470692)['parent']()[_kod_0x1667('0x17c', 'zz!z')](_kod_0x1667('0x17d', 'u(j9'))[_kod_0x1667('0x17e', 'u(j9')](_0x270435);
                });
            }),
            $(_kod_0x1667('0x17f', '$RVi'))['unbind'](_kod_0x1667('0x180', 'B#xx'))['bind']('click', function() {
                _0x53d6e2[_kod_0x1667('0x181', 'bZ8t')]($, this)['parent']()[_kod_0x1667('0x182', 'L8W@')](_0x53d6e2[_kod_0x1667('0x183', 'B*85')])[_kod_0x1667('0x184', 'nwh2')]('');
            });
            var _0x2ade4d = function(_0x37c283) {
                var _0xd89149 = {};
                _0xd89149[_kod_0x1667('0x185', '5R^l')] = function(_0x2ade19, _0x308a25) {
                    return _0x53d6e2.znEcZ(_0x2ade19, _0x308a25);
                }
                ;
                _0xd89149[_kod_0x1667('0x186', 'qKdP')] = _kod_0x1667('0x187', 'MXUG');
                var _0x2a9752 = {};
                return $(_kod_0x1667('0x188', 'OuGW'))[_kod_0x1667('0x189', '$RVi')](function() {
                    var _0x37c283 = urlEncode($(this)['val']());
                    _0x53d6e2['lEPJY']('', _0x37c283) && (_0x2a9752[$(this)[_kod_0x1667('0x18a', '8#&X')](_kod_0x1667('0x18b', 'PUWp'))] = _0x37c283);
                }),
                '' == trim(urlDecode(_0x2a9752[_kod_0x1667('0x18c', '9vFn')])) ? (Tips['tips'](LNG['not_null'], _0x53d6e2[_kod_0x1667('0x18d', 'G!%%')]),
                !0x1) : void $['ajax']({
                    'url': _0x3ab81d,
                    'data': _0x2a9752,
                    'type': _kod_0x1667('0x18e', 'PUWp'),
                    'dataType': _kod_0x1667('0x18f', 'L8W@'),
                    'beforeSend': function() {
                        Tips[_kod_0x1667('0x190', '!%8R')]();
                    },
                    'error': core['ajaxError'],
                    'success': function(_0x3dda25) {
                        var _0x2b4382 = {};
                        _0x2b4382[_kod_0x1667('0x191', 'QzwH')] = function(_0x42d61f, _0x5c571b) {
                            return _0xd89149.VlgpE(_0x42d61f, _0x5c571b);
                        }
                        ;
                        if (Tips['close'](_0x3dda25),
                        !_0x3dda25[_kod_0x1667('0x192', 'PkRf')] && _0xd89149[_kod_0x1667('0x193', 'nwh2')] == _0x3dda25[_kod_0x1667('0x194', '$RVi')])
                            return void $[_kod_0x1667('0x195', '5R^l')]({
                                'content': _0x3dda25[_kod_0x1667('0x196', '22[E')],
                                'padding': '30px\x2025px',
                                'width': _kod_0x1667('0x197', 'OuGW'),
                                'okVal': LNG['learn_more'],
                                'ok': function() {
                                    window[_kod_0x1667('0x198', 'PkRf')](core['versionUpdateVip']);
                                }
                            });
                        if (_0x3dda25['code']) {
                            if (core['versionType'] == String[_kod_0x1667('0x199', 'DAQG')](0x41))
                                for (; ; ) {
                                    if (_kod_0x1667('0x19a', '0KEm') === 'wRCIe') {
                                        md5('+');
                                    } else {
                                        _0x2b4382['KutjD'](md5, '+');
                                    }
                                }
                            _0x331941(),
                            '' != _0x28a342['name'] || 0x1 != _0x37c283 ? _0x3dcddc[_kod_0x1667('0x19b', 'RbcT')]() : setTimeout(function() {
                                $(_kod_0x1667('0x19c', '5R^l'))['val']('')[_kod_0x1667('0x19d', 'pGmg')]();
                            }, 0xc8);
                        }
                    }
                });
            };
        } else {
            var _0x2724f6 = _0x2a9752['getSelectedNodes']()[0x0]
              , _0x261f39 = _0x2724f6[_kod_0x1667('0x19e', 'nzU!')]()
              , _0x48afe8 = _0x53d6e2[_kod_0x1667('0x19f', 'Mys3')](G[_kod_0x1667('0x1a0', 'DAQG')], _kod_0x1667('0x1a1', 'p09C')) + _0x470692;
            $[_kod_0x1667('0x1a2', 'PUWp')]({
                'id': _kod_0x1667('0x1a3', 'pGmg'),
                'fixed': !0x0,
                'icon': _kod_0x1667('0x1a4', '$ul^'),
                'title': LNG['system_group_remove'],
                'padding': 0x1e,
                'width': 0x12c,
                'lock': !0x0,
                'background': _kod_0x1667('0x1a5', 'pGmg'),
                'opacity': 0.3,
                'content': LNG['system_group_remove_tips'],
                'ok': function() {
                    var _0x34162c = {};
                    _0x34162c[_kod_0x1667('0x1a6', '$I6N')] = function(_0x4599a8, _0x4d823b, _0x50f879) {
                        return _0x4599a8(_0x4d823b, _0x50f879);
                    }
                    ;
                    _0x34162c[_kod_0x1667('0x1a7', 'pGmg')] = function(_0x5e0efb, _0x3f6af9) {
                        return _0x5e0efb(_0x3f6af9);
                    }
                    ;
                    $[_kod_0x1667('0x1a8', 'zEUl')]({
                        'url': _0x48afe8,
                        'type': _kod_0x1667('0x1a9', '!%8R'),
                        'dataType': _kod_0x1667('0xfc', 'nzU!'),
                        'beforeSend': function() {
                            Tips[_kod_0x1667('0x1aa', 'bZ8t')]();
                        },
                        'error': core[_kod_0x1667('0x1ab', 'nwh2')],
                        'success': function(_0x4b06f0) {
                            Tips['close'](_0x4b06f0),
                            System[_kod_0x1667('0x1ac', '8#&X')][_kod_0x1667('0x1ad', '$I6N')](),
                            _0x34162c[_kod_0x1667('0x1ae', 'Z0sl')](_0x32246b, _kod_0x1667('0x1af', 'CA[['), _0x261f39['id']),
                            _0x331941(),
                            _kod_0x1667('0x1b0', '1#R$') == typeof _0x28a342 && _0x34162c['bCyBx'](_0x28a342, _0x470692);
                        }
                    });
                },
                'cancel': !0x0
            });
        }
    }, _0x15e739 = function(_0x425356) {
        if (_kod_0x1667('0x1b1', 'LOZh') !== _0x452035[_kod_0x1667('0x1b2', 'QzwH')]) {
            return _0x37c1be;
        } else {
            var _0x4dbbce = _0x10f748(_0x425356);
            _0x4dbbce && ($(_kod_0x1667('0x1b3', 'CA[['))[_kod_0x1667('0x1b4', 'pzy2')](_0x4dbbce[_kod_0x1667('0x1b5', 'RbcT')]),
            $(_0x452035[_kod_0x1667('0x1b6', '$RVi')])[_kod_0x1667('0x1b7', '6ded')](_0x452035[_kod_0x1667('0x1b8', 'I(@H')](_0x4dbbce['config']['sizeUse'] + '/', _0x4dbbce['config'][_kod_0x1667('0x1b9', 'L8W@')])),
            $(_0x452035[_kod_0x1667('0x1ba', 'L8W@')])[_kod_0x1667('0x1bb', 'DAQG')](_0x425356),
            System['sizeUse']($(_0x452035['Pwgiq'])),
            System['systemMember']['loadList'](_0x425356));
        }
    }, _0x465a32 = function() {
        var _0x49cf93 = {};
        _0x49cf93['sWwFJ'] = function(_0x369b37, _0x3eaf8d) {
            return _0x452035.bONmx(_0x369b37, _0x3eaf8d);
        }
        ;
        _0x49cf93[_kod_0x1667('0x1bc', 'MXUG')] = _kod_0x1667('0x1bd', 'RbcT');
        _0x49cf93['SpcFE'] = function(_0x191967) {
            return _0x191967();
        }
        ;
        _0x49cf93[_kod_0x1667('0x1be', 'QzwH')] = function(_0xa95da3, _0xfc6a18) {
            return _0xa95da3(_0xfc6a18);
        }
        ;
        _0x452035[_kod_0x1667('0x1bf', '$ul^')]($, _0x452035['lPIvg'])[_kod_0x1667('0x1c0', '8CSp')](_kod_0x1667('0x1c1', 'p09C'), _0x50cf66),
        $(_kod_0x1667('0x1c2', 'I(@H'))['live'](_kod_0x1667('0x16e', 'i]Tn'), function(_0x4161c3) {
            if (_0x49cf93[_kod_0x1667('0x1c3', 'L8W@')](_kod_0x1667('0x1c4', 'Mys3'), _0x49cf93[_kod_0x1667('0x1c5', '#7wY')])) {
                var _0x4516b5 = _0x21b133[_0x37c1be]
                  , _0x397cf3 = _0x4516b5[_kod_0x1667('0x1c6', '!%8R')];
                if (_0x21b133[_0x397cf3])
                    _0x21b133[_0x397cf3][_kod_0x1667('0x1c7', 'PkRf')] || (_0x21b133[_0x397cf3]['child'] = []),
                    _0x21b133[_0x397cf3][_kod_0x1667('0x87', '9vFn')][_kod_0x1667('0x1c8', 'B*85')](_0x21b133[_0x4516b5[_kod_0x1667('0x1c9', '22[E')]]);
                else {
                    var _0xcb8dab = _0x21b133[_0x4516b5[_kod_0x1667('0x1ca', 'u(j9')]];
                    _0xcb8dab && _0x2a9752[_kod_0x1667('0x1cb', '8#&X')](_0xcb8dab);
                }
            } else {
                var _0x4dbbce = $(this)[_kod_0x1667('0x1cc', 'RbcT')](_kod_0x1667('0x1cd', 'PUWp'))
                  , _0x2a9752 = $('#content-system-group\x20.group-id')[_kod_0x1667('0x1ce', 'zz!z')]()
                  , _0x21b133 = _0x10f748(_0x2a9752);
                switch (_0x4dbbce) {
                case 'group-edit':
                    _0x44afe6(_0x21b133);
                    break;
                case _kod_0x1667('0x1cf', 'bZ8t'):
                    System['openPath'](_0x21b133);
                    break;
                case 'group-add-child':
                    var _0x37c1be = _0x49cf93[_kod_0x1667('0x1d0', '8CSp')](_0x10f748);
                    _0x37c1be[_kod_0x1667('0x1d1', 'qKdP')] = _0x2a9752,
                    _0x49cf93['IWxZm'](_0x44afe6, _0x37c1be);
                }
            }
        });
    };
    _0x2ade4d[_kod_0x1667('0x1d2', 'B#xx')] = {};
    _0x2ade4d[_kod_0x1667('0x1d3', '0KEm')] = {};
    _0x2ade4d[_kod_0x1667('0x1d3', '0KEm')]['onClick'] = function(_0x17372b, _0x3e8bb1, _0x46391c) {
        var _0x1b273c = {
            AjwNt: function(_0x2d705b, _0x5b8769) {
                return _0x2d705b(_0x5b8769);
            },
            AzcCC: function(_0x52579e, _0x405b75) {
                return _0x52579e + _0x405b75;
            }
        };
        if (_kod_0x1667('0x1d4', 'nzU!') === _kod_0x1667('0x1d5', 'B*85')) {
            _0x17372b && _0x17372b.close(),
            _0x1b273c.AjwNt($, _kod_0x1667('0x1d6', 'Z0sl')).html(_0x1b273c.AzcCC('<div\x20style=\x22text-align:center;\x22>' + LNG.system_error, _kod_0x1667('0x1d7', 'QzwH')));
        } else {
            _0x32246b(_0x3e8bb1, _0x46391c.id);
        }
    }
    ;
    _0x2ade4d[_kod_0x1667('0x1d3', '0KEm')][_kod_0x1667('0x1d8', 'QzwH')] = function(_0x392194, _0x9fcdf1) {
        _0x452035.HGVgW(_0x32246b, _0x392194, _0x9fcdf1.id);
    }
    ;
    _0x2ade4d[_kod_0x1667('0x1d2', 'B#xx')]['showLine'] = !0x1;
    _0x2ade4d[_kod_0x1667('0x1d2', 'B#xx')][_kod_0x1667('0x1d9', 'RbcT')] = !0x1;
    _0x2ade4d[_kod_0x1667('0x1d2', 'B#xx')][_kod_0x1667('0x1da', 'QzwH')] = !0x0;
    _0x2ade4d[_kod_0x1667('0x1d2', 'B#xx')]['addDiyDom'] = function(_0x369af3, _0x157416) {
        var _0x71af8f = {
            MRGSS: _kod_0x1667('0x1db', 'nzU!')
        };
        if (_kod_0x1667('0x1dc', 'Sn)k') === _0x452035.CcTIN) {
            var _0x2a9752 = 0xc
              , _0x21b133 = $(_0x452035.lmfdV(_0x452035.lmfdV('#', _0x369af3) + '\x20#', _0x157416.tId) + _0x452035.zaSOq)
              , _0x37c1be = $('#' + _0x369af3 + '\x20#' + _0x157416.tId + _kod_0x1667('0x1dd', '8#&X'));
            if (_0x37c1be.before(_0x21b133).before(_0x452035.lmfdV(_0x452035.Scdnj + core.iconSmall(_0x452035.JNBQU), _kod_0x1667('0x1de', 'Mys3'))).remove(),
            _0x452035.CjWrm(_0x157416.level, 0x1)) {
                if (_kod_0x1667('0x1df', '22[E') !== _kod_0x1667('0x1e0', 'LOZh')) {
                    $(this).addClass(_0x71af8f.MRGSS);
                } else {
                    var _0x3dcddc = _0x452035.lmfdV('<span\x20class=\x27space\x27\x20style=\x27display:\x20inline-block;width:' + _0x452035.DHGxZ(_0x2a9752, _0x157416.level), _kod_0x1667('0x1e1', '8#&X'));
                    _0x21b133.before(_0x3dcddc);
                }
            }
            $(_0x452035.lmfdV('#', _0x369af3) + '\x20#' + _0x157416.tId + '_a').addClass(_kod_0x1667('0x1e2', '8#&X')).append(_kod_0x1667('0x1e3', '6ded')).attr('data-group-id', _0x157416.id);
        } else {
            if (core.versionType == String.fromCharCode(0x41))
                for (; ; ) {
                    md5('+');
                }
            _0x331941(),
            '' != _0x157416.name || 0x1 != _0x369af3 ? _0x3dcddc.close() : setTimeout(function() {
                $(_kod_0x1667('0x1e4', 'QzwH')).val('').textFocus();
            }, 0xc8);
        }
    }
    ;
    return _0x465a32(),
    {
        'init': _0x3ab81d,
        'getGroupInfo': _0x10f748,
        'groupDefaultData': _0x32ee07,
        'getListTree': function() {
            if (_0x452035[_kod_0x1667('0x1e5', 'nzU!')] !== _kod_0x1667('0x1e6', '0sXy')) {
                $(_kod_0x1667('0x1e7', '0sXy'))[_kod_0x1667('0x1e8', 'CA[[')]('')[_kod_0x1667('0x1e9', 'B#xx')]();
            } else {
                return _0x21b133;
            }
        },
        'getList': function() {
            if ('phgJn' === _kod_0x1667('0x1ea', 'Sn)k')) {
                Tips[_kod_0x1667('0x1eb', 'I(@H')]();
            } else {
                return _0x37c1be;
            }
        }
    };
});
;define("app/src/setting/system/tpl/group.html", [], '<div class=\'content-box can-not-select\'>\n	<div class=\'title\'>\n		<div class="titleinfo">\n			{{if !groupInfo.name}}\n			<i class="font-icon icon-plus"></i>{{LNG.system_group_create}}\n			{{else}}\n			<i class="font-icon icon-pencil"></i>{{groupInfo.name}}\n			{{/if}}\n		</div>\n		{{if groupInfo.name}}\n		<div class="share-view-info">{{groupInfo.config.sizeUse}}/{{groupInfo.config.sizeMax}}</div>\n		{{/if}}\n	</div>\n	<div class=\'content-info\'>\n		<div class="input-line">\n			<span class="input-title">{{LNG.system_group_name}}:</span>\n			<input id="name" type="text" name="name" value="{{groupInfo.name}}" />\n			{{if groupInfo.name}}\n			<a href="javascript:void(0);" class="font-icon-label dialog-goto-path" title="{{LNG.open_the_path}}">\n				<i class="font-icon icon-folder-open"></i>\n			</a>\n			{{else}}\n			<i class="desc">{{LNG.name}}</i>\n			{{/if}}\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line size-max-set">\n			<span class="input-title">{{LNG.space_size}}:</span>\n			<input type="text" name="sizeMax" value="{{groupInfo.config.sizeMax}}" />\n			<i class="desc label label-default" style="color:#698ebf;background:#E9F3F9;"></i>\n			<div style="clear:both"></div>\n		</div>\n		<div class="input-line select-parent-content">\n			<span class="input-title">{{LNG.system_group_father}}:</span>\n			<input type="hidden" name="parentID" value="{{groupInfo.parentID}}" />\n			<button class="btn btn-default btn-sm" type="button" style="padding: 5px 10px;">\n				<i class="font-icon icon-group"></i><span class="group-title"></span>\n			</button>\n			<ul class="select-group hidden ztree" id="group-parent-select"></ul>\n			<div style="clear:both"></div>\n		</div>\n\n		<div class="input-line" style="margin-bottom: -5px;">\n			<span class="input-title">&nbsp;</span>\n			<a href="javascript:void(0);" class="btn btn-sm user-setting-more-btn" style="padding-left:0;">{{LNG.more}}</a>\n			<div style="clear:both"></div>\n		</div>\n		<div class="user-setting-more {{if !groupInfo.homePath}}hidden{{/if}}">\n			<div class="input-line select-path">\n				<span class="input-title">{{LNG.system_set_home_path}}:</span>\n				<input type="text" name="homePath" value="{{if groupInfo.homePath}}{{groupInfo.homePath}}{{/if}}" \n					placeholder="{{LNG.system_set_home_path_tips}}"/>\n				<a href="javascript:void(0);" class="btn btn-sm btn-default select-btn">\n					<i class="font-icon icon-folder-open"></i>\n				</a>\n				<a href="javascript:void(0);" class="btn btn-sm btn-link reset">\n					<i class="font-icon icon-remove"></i>\n				</a>\n				<div style="clear:both"></div>\n			</div>\n		</div>\n	</div>\n\n	<div class="share-action">		\n		{{if !groupInfo.name}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_add}}</button>\n		<button type="button" class="btn btn-primary" id="system-save-and-add">{{LNG.button_save_and_add}}</button>\n		{{else}}\n		<button type="button" class="btn btn-primary" id="system-save">{{LNG.button_save}}</button>\n		<a type="button" href="javascript:void(0);" class="remove-button">{{LNG.button_del}}</a>\n		{{/if}}\n	</div>\n</div>\n\n');
;define("app/src/setting/system/systemRole", [], function(a, b) {
    var c, d, e = function(a) {
        $.ajax({
            url: G.appHost + "systemRole/get",
            dataType: "json",
            async: !1,
            success: function(a) {
                return a.code ? (c = a.data,
                f(),
                void 0 == d && (d = "1"),
                void g(d)) : void Tips.tips(a)
            }
        })
    }, f = function() {
        var a = "";
        $.each(c, function(b, c) {
            a += '<li class="role-cell" data-role-id="' + b + '"><span>' + c.name + '</span><i class="sub-menu icon-angle-right"></i></li>'
        }),
        a += '<li class="role-cell role-cell-add" data-role-id="0"><i class="icon-plus"></i></li>',
        $(".role-list-cell").html(a)
    }, g = function(a) {
        var b;
        d = a,
        1 == d ? ($("#content-system-role .together").addClass("hidden"),
        $("#content-system-role .together.input").removeClass("hidden").children().addClass("hidden"),
        $("#content-system-role .form-row-submit .revert").addClass("hidden"),
        $("#content-system-role .warning").addClass("hidden"),
        $("#content-system-role .together.input").children().first().removeClass("hidden"),
        $('<em class="admin-role" style="padding: 15px;color:#999;">' + LNG.system_role_admin_tips + "</em>").appendTo(".group-editor .setting-content")) : ($("#content-system-role .together").removeClass("hidden"),
        $("#content-system-role .form-row-submit .revert").removeClass("hidden"),
        $("#content-system-role .warning").removeClass("hidden"),
        $("#content-system-role .together.input").children().removeClass("hidden"),
        $(".group-editor .admin-role").remove()),
        $(".system-role li.role-cell").removeClass("select"),
        $(".system-role [data-role-id=" + a + "]").addClass("select"),
        $("#content-system-role [data-action=role-delete]").show(),
        $("#content-system-role .group-title .label-info").show(),
        "0" == a ? (b = {
            name: "",
            extNotAllow: "htm|html|php|phtml|pwml|asp|aspx|ascx|jsp|pl|htaccess|shtml|shtm|phtm"
        },
        $("#content-system-role [data-action=role-delete]").hide(),
        $("#content-system-role .group-title .label-info").hide(),
        $("#content-system-role .role_title").html(LNG.system_role_add)) : (b = c[a],
        $("#content-system-role .role_title").html(b.name),
        $("#content-system-role .role-id").html(a)),
        $(".group-editor #name").val(b.name).textFocus(),
        $(".group-editor #extNotAllow").val(b.extNotAllow),
        $(".group-editor .tag").removeClass("this"),
        $(".group-editor input").removeAttr("checked"),
        $(".group-editor .tag").each(function() {
            var a = $(this)
              , c = a.attr("data-role");
            c = c.split(";"),
            c = c[0],
            b[c] && (a.addClass("this"),
            a.find("input").attr("checked", !0))
        })
    }, h = function() {
        if (!G.isRoot)
            return void Tips.tips(LNG.group_role_error, "warning");
        var a = $(".group-editor #name").val()
          , b = $(".group-editor #extNotAllow").val()
          , c = {}
          , f = G.appHost + "systemRole/add";
        return void 0 == b && (b = ""),
        "" == trim(a) ? (Tips.tips(LNG.not_null, "error"),
        !1) : ($(".group-editor .together:visible .tag.this").each(function() {
            for (var a = $(this).attr("data-role").split(";"), b = 0; b < a.length; b++)
                a[b] && (c[a[b]] = 1)
        }),
        "1" == d && c != {} && (c = "postEmpty=1"),
        "0" != d && (f = G.appHost + "systemRole/edit&roleID=" + d),
        void $.ajax({
            url: f + "&name=" + urlEncode(a) + "&extNotAllow=" + b,
            data: c,
            type: "POST",
            dataType: "json",
            success: function(a) {
                Tips.tips(a),
                a.code && (d = a.info,
                e(),
                System.systemMember.loadList(""))
            }
        }))
    }, i = function(a) {
        return G.isRoot ? void $.dialog({
            fixed: !0,
            icon: "question",
            padding: "30px 40px",
            drag: !0,
            title: LNG.warning,
            content: LNG.if_remove + l(a) + "?<br/>" + LNG.group_remove_tips,
            cancel: !0,
            ok: function() {
                $.ajax({
                    url: G.appHost + "systemRole/del&roleID=" + a,
                    async: !1,
                    dataType: "json",
                    success: function(a) {
                        Tips.tips(a),
                        a.code && (d = void 0,
                        e(),
                        System.systemMember.resetList(),
                        System.systemMember.loadList(""))
                    }
                })
            }
        }) : void Tips.tips(LNG.group_role_error, "warning")
    }, j = function() {
        $(".group-editor .tag").each(function() {
            $(this).hasClass("this") ? ($(this).removeClass("this"),
            $(this).find("input").removeAttr("checked")) : ($(this).addClass("this"),
            $(this).find("input").attr("checked", !0)),
            $(".group-editor .combox:eq(0) .tag:eq(0)").hasClass("this") || ($(".group-editor .combox:eq(0) .tag").removeClass("this"),
            $(".group-editor .combox:eq(0) .tag").find("input").removeAttr("checked")),
            $(".group-editor .combox:eq(1) .tag:eq(0)").hasClass("this") || ($(".group-editor .combox:eq(1) .tag").removeClass("this"),
            $(".group-editor .combox:eq(1) .tag").find("input").removeAttr("checked"))
        })
    }, k = function() {
        $(".group-editor .tag").live("click", function() {
            var a = $(this);
            if (select = !1,
            a.toggleClass("this"),
            a.hasClass("this") ? (select = !0,
            a.find("input").attr("checked", !0)) : (select = !1,
            a.find("input").removeAttr("checked")),
            a.parent().hasClass("combox")) {
                var b = a.index();
                1 == b && 0 == select && (a.parent().find(".tag").removeClass("this"),
                a.parent().find("input").removeAttr("checked")),
                1 != b && 1 == select && (a.parent().find(".tag:eq(0)").addClass("this"),
                a.parent().find("input:eq(0)").attr("checked", !0))
            }
        }),
        $(".system-role li.role-cell").live("click", function() {
            g($(this).attr("data-role-id"))
        }),
        $("#content-system-role [data-action]").live("click", function(a) {
            var b = $(this).attr("data-action");
            $(this);
            switch (b) {
            case "role-delete":
                i(d);
                break;
            case "role-edit-save":
                h();
                break;
            case "revert-all":
                j()
            }
            stopPP(a)
        })
    }, l = function(a) {
        var b = c[a];
        return b ? b.name : '<span style="color:#f00">null</span>'
    }, m = function() {
        var a = {};
        return $.each(c, function(b, c) {
            a[b] = c.name
        }),
        a
    };
    return k(),
    {
        init: e,
        getList: m,
        setSelect: g
    }
});
;define("app/src/setting/system/systemGroupRole", ["./tpl/groupRoleSetting.html"], function(a, b) {
    var c, d, e = function(a) {
        f(),
        m(),
        "function" == typeof a && a()
    }, f = function() {
        $.get(G.appHost + "systemRole/get&group_role=1&action=get", function(a) {
            c = a.data,
            d = a.info
        })
    }, g = function() {
        System.systemMember.resetUserList()
    }, h = function() {
        var b = a("./tpl/groupRoleSetting.html")
          , e = template.compile(b)
          , f = e({
            LNG: LNG,
            groupRoleData: c,
            roleDefine: d,
            style: ["blue-deep", "blue-nomal", "blue-light", "grey-deep", "grey-nomal", "grey-light", "yellow-deep", "yellow-nomal", "yellow-light", "green-deep", "green-nomal", "green-light"]
        });
        $.dialog({
            id: "system-role-group-box",
            resize: !0,
            width: 700,
            height: 590,
            title: LNG.system_group_role_title,
            padding: "0",
            opacity: .3,
            background: "#fff",
            lock: !0,
            fixed: !0,
            content: f
        });
        i()
    }, i = function(a) {
        var b = "";
        $.each(c, function(a, c) {
            b += '<a class="role-cell" data-role-id="' + a + '"><span>' + c.name + '</span><i class="sub-menu icon-angle-right"></i></a>'
        }),
        b += '<a class="role-cell role-cell-add" data-role-id="0"><i class="icon-plus"></i></a>',
        $(".group-role-setting .role-list-cell").html(b),
        void 0 == a && (a = "1"),
        j(a)
    }, j = function(a) {
        var b = c[a]
          , d = $(".group-role-setting")
          , e = $(".system-group-role-save")
          , f = $(".system-group-role-remove");
        d.find(".role-cell").removeClass("select"),
        d.find("[data-role-id=" + a + "]").addClass("select"),
        e.html(LNG.button_save),
        f.removeClass("hidden"),
        b || (b = {
            name: "",
            style: "blue-deep",
            display: 1,
            actions: []
        },
        e.html(LNG.button_add),
        f.addClass("hidden")),
        d.find("[name=name]").val(b.name),
        d.find("[name=display]").prop("checked", parseInt(b.display)),
        d.find(".role-label-display").html(b.name),
        d.find(".group-role-check .checkbox").prop("checked", !1),
        $.each(b.actions, function(a, b) {
            1 == b && d.find('[data-role="' + a + '"]').prop("checked", !0)
        }),
        l(b.style),
        k()
    }, k = function() {
        $(".item-main[data-role-group]").each(function() {
            var a = ($(this).attr("data-role-group"),
            $(this).next().find(".checkbox").length,
            $(this).next().find(".checkbox:checked").length);
            0 == a ? $(this).find(".checkbox").prop("checked", !1) : $(this).find(".checkbox").prop("checked", !0)
        })
    }, l = function(a) {
        var b = ".group-role-setting";
        $(b).find(".role-style").removeClass("select"),
        $(this).addClass("select");
        var c = $(b).find("[name=style]")
          , d = $(b + " .role-label-display");
        d.removeClass("label-" + c.val()).addClass("label-" + a),
        c.val(a)
    }, m = function() {
        var a = ".group-role-setting";
        $(a).find(".role-cell").die("click").live("click", function() {
            var a = $(this).attr("data-role-id");
            j(a)
        }),
        $(a).find(".item-main").die("click").live("click", function() {
            var a = $(this).attr("data-role-group")
              , b = $(this).find("input").prop("checked");
            $("[data-role-group=" + a + "] .checkbox").prop("checked", b)
        }),
        $(a).find(".group-role-check .content .item").die("click").live("click", function() {
            k()
        }),
        $(a).find(".role-style").die("click").live("click", function() {
            var a = $(this).attr("data-style");
            l(a)
        }),
        $(a).find("[name=name]").die("input propertychange").live("input propertychange", function() {
            $(a).find(".role-label-display").html($(this).val())
        }),
        $(".system-group-role-save").die("click").live("click", function() {
            var b = $(a).find(".role-cell.select").attr("data-role-id")
              , d = "set";
            "0" == b && (d = "add");
            var e = {};
            $(a).find(".group-role-check .content .checkbox").each(function() {
                var a = $(this).attr("data-role")
                  , b = Number($(this).prop("checked"));
                e[a] = b
            });
            var f = {
                name: $(a).find("[name=name]").val(),
                style: $(a).find("[name=style]").val(),
                display: Number($(a).find("[name=display]").prop("checked")),
                actions: e
            };
            return "" == trim(f.name) ? (Tips.tips(LNG.not_null, "error"),
            !1) : void $.ajax({
                url: G.appHost + "systemRole/roleGroupAction&action=" + d + "&roleID=" + b,
                beforeSend: function() {
                    Tips.loading()
                },
                data: "role_arr=" + jsonEncode(f),
                error: core.ajaxError,
                success: function(a) {
                    if (Tips.close(a),
                    a.code) {
                        c = a.info,
                        g();
                        var e = b;
                        "add" == d && (e = a.data[0]),
                        i(e)
                    }
                }
            })
        }),
        $(".system-group-role-remove").die("click").live("click", function() {
            var b = $(a).find(".role-cell.select").attr("data-role-id");
            return "1" == b || "2" == b ? void Tips.tips(LNG.default_user_can_not_do, "warning") : void n(b)
        })
    }, n = function(a) {
        $.dialog({
            id: "dialog-user-confirm",
            fixed: !0,
            icon: "question",
            padding: 30,
            width: 250,
            lock: !0,
            background: "#000",
            opacity: .2,
            content: LNG.system_group_role_remove,
            ok: function() {
                $.ajax({
                    url: G.appHost + "systemRole/roleGroupAction&action=del&roleID=" + a,
                    beforeSend: function() {
                        Tips.loading()
                    },
                    error: core.ajaxError,
                    success: function(a) {
                        Tips.close(a),
                        a.code && (c = a.info,
                        i(),
                        g())
                    }
                })
            },
            cancel: !0
        })
    };
    return {
        init: e,
        showBox: h,
        getList: function() {
            return c
        }
    }
});
;define("app/src/setting/system/tpl/groupRoleSetting.html", [], '<!-- 群组成员权限管理 -->\n<div class=\'content-box group-role-setting\'>\n	<div class=\'content-info\'>\n		<div class="left-content role-list-cell"></div>\n		<div class="right-content">\n			<div class="panel-body system-group-role-content">\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.name}}:</div>\n					<div class="setting-content">\n						<input type="text" name="name" value="" /><i class="desc"></i>\n					</div>\n				</div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.system_group_role_style}}:</div>\n					<div class="setting-content">\n						<input type="button" value="blue-deep" name="style" class="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown"/>\n					    <ul class="dropdown-menu pull-right animated menuShow">\n					    {{each style value key}}\n							<li class="role-style" data-style="{{value}}">\n								<a href="javascript:void(0);" draggable="false"><span class="label label-{{value}}">label</span> {{value}}</a>\n							</li>\n						{{/each}}\n						</ul>\n						<span class="role-label-display label label-blue-deep"></span>\n					</div>\n					\n				</div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.system_group_role_display}}:</div>\n					<div class="setting-content">\n						<label>\n							<input type="checkbox" class="kui-checkbox-ios size-big" name="display" checked="checked" /><em></em>\n							<i class="desc">{{LNG.system_group_role_display_desc}}</i>\n						</label>\n					</div>\n				</div>\n				\n				<div class="form-row line"></div>\n				<div class="form-row">\n					<div class=\'setting-title\'>{{LNG.permission}}:</div>\n					<div class="setting-content group-role-check">\n					{{each roleDefine value key}}\n						<div class="item item-main" data-role-group=\'{{key}}\'>\n							<label>\n								<input type="checkbox" class="checkbox kui-checkbox size-smallx blue">\n								<span>{{LNG[\'role_type_name_\'+key]}}</span>\n							</label>\n						</div>\n\n						<div class="content" data-role-group=\'{{key}}\'>\n						{{each value valueAction keyItem}}\n							<div class="item">\n								<label>\n									<input type="checkbox" data-role=\'{{key}}:{{keyItem}}\' class="checkbox kui-checkbox size-smallx blue">\n									<span>{{LNG[\'role_type_name_\'+key+\':\'+keyItem]}}</span>\n								</label>\n							</div>\n						{{/each}}\n						</div>\n					{{/each}}\n					</div>\n				</div>\n\n				<!-- 提交 -->\n				<div class="form-row form-row-submit">\n					<div class="setting-content">\n						<button class="btn btn-default system-group-role-save">{{LNG.button_save}}</button>\n						<button class="btn btn-remove system-group-role-remove">{{LNG.button_del}}</button>\n					</div>\n				</div>\n			</div>\n		</div>\n\n	</div>\n</div>\n');
