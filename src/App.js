import React, { useState } from 'react';

// --- LOGIN MODAL ---
function LoginModal({ onLogin }) {
  const [username, setUsername] = useState('');
  const [logs, setLogs] = useState([
    'INITIALIZING ARENA PROTOCOL...',
    'CHECKING NETWORK STATUS...',
    'AWAITING USER CREDENTIALS...'
  ]);

  const handleSubmit = () => {
    if (username.trim()) {
      setLogs(prev => [...prev, `USER [${username.trim()}] AUTHENTICATED`, 'ACCESS GRANTED']);
      setTimeout(() => onLogin(username.trim()), 800);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: 'rgba(10, 10, 20, 0.95)',
        padding: '50px 60px',
        borderRadius: '20px',
        border: '2px solid #00d4ff',
        boxShadow: '0 0 60px rgba(0, 212, 255, 0.4), inset 0 0 60px rgba(0, 212, 255, 0.05)',
        textAlign: 'center',
        position: 'relative',
        animation: 'loginEntry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        maxWidth: '500px'
      }}>
        <div style={{
          position: 'absolute',
          top: -2,
          left: -2,
          right: -2,
          bottom: -2,
          background: 'linear-gradient(45deg, #00d4ff, #7b2ff7, #00d4ff)',
          borderRadius: '20px',
          opacity: 0.4,
          filter: 'blur(15px)',
          zIndex: -1,
          animation: 'energyPulse 3s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          fontSize: '10px',
          color: '#00ff88',
          fontFamily: 'monospace',
          letterSpacing: '1px'
        }}>● SECURE</div>
        
        <h1 style={{
          fontSize: '52px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '5px',
          letterSpacing: '4px',
          textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
          animation: 'glitchTitle 5s infinite'
        }}>ARENA SYSTEM</h1>
        
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
          margin: '20px 0',
          animation: 'scanline 2s linear infinite'
        }}></div>
        
        <div style={{
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '10px',
          borderRadius: '8px',
          marginBottom: '25px',
          minHeight: '60px',
          fontFamily: 'monospace',
          fontSize: '11px',
          color: '#00ff88',
          textAlign: 'left',
          border: '1px solid rgba(0, 255, 136, 0.3)'
        }}>
          {logs.slice(-3).map((log, i) => (
            <div key={i} style={{ 
              opacity: 0.5 + (i * 0.25),
              animation: 'logEntry 0.3s ease-out'
            }}>
              {'>'} {log}
            </div>
          ))}
        </div>
        
        <div>
          <input
            type="text"
            placeholder="ENTER CALLSIGN"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyPress={handleKeyPress}
            autoFocus
            style={{
              width: '100%',
              padding: '16px 20px',
              fontSize: '16px',
              background: 'rgba(0, 212, 255, 0.05)',
              border: '2px solid #00d4ff',
              borderRadius: '10px',
              color: 'white',
              outline: 'none',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
              fontFamily: 'monospace',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}
          />
          <button 
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '18px 20px',
              fontSize: '18px',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
              border: 'none',
              borderRadius: '10px',
              color: 'white',
              cursor: 'pointer',
              letterSpacing: '3px',
              transition: 'all 0.3s ease',
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shimmer 3s infinite'
            }}></div>
            <span style={{ position: 'relative', zIndex: 1 }}>⚡ ENTER ARENA ⚡</span>
          </button>
        </div>
        
        <p style={{
          marginTop: '20px',
          fontSize: '10px',
          color: '#666',
          fontFamily: 'monospace',
          letterSpacing: '1px'
        }}>WARNING: ONLY ELITE COMBATANTS PERMITTED</p>
      </div>
      <style>{`
        @keyframes loginEntry {
          from { opacity: 0; transform: scale(0.8) translateY(30px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes energyPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.02); }
        }
        @keyframes glitchTitle {
          0%, 98% { transform: translateX(0); }
          99% { transform: translateX(-2px); }
          100% { transform: translateX(2px); }
        }
        @keyframes scanline {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        @keyframes logEntry {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

// --- GAME 1: TIC TAC TOE ---
function TicTacToe({ onExit }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [matchStarted, setMatchStarted] = useState(false);
  const [gridRevealed, setGridRevealed] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [combatLog, setCombatLog] = useState([
    'ARENA SYNCHRONIZED',
    'OPPONENT LOADED: AI_CORE v1.2',
    'GRID SYSTEMS ONLINE',
    'AWAITING CONFIRMATION'
  ]);
  const [moveCount, setMoveCount] = useState(0);
  const [spectators, setSpectators] = useState(0);
  const [sessionId] = useState(`session_${Date.now()}_${Math.random()}`);

  // Real spectator tracking with persistent storage
  useState(() => {
    let isActive = true;
    
    const updateSpectators = async () => {
      try {
        // Register this session
        const now = Date.now();
        await window.storage.set(`spectator:${sessionId}`, now.toString(), true);
        
        // Get all spectator sessions
        const result = await window.storage.list('spectator:', true);
        if (result && result.keys) {
          // Filter out stale sessions (older than 10 seconds)
          const activeKeys = [];
          for (const key of result.keys) {
            try {
              const data = await window.storage.get(key, true);
              if (data && data.value) {
                const timestamp = parseInt(data.value);
                if (now - timestamp < 10000) { // 10 second timeout
                  activeKeys.push(key);
                }
              }
            } catch (e) {
              // Skip invalid entries
            }
          }
          
          setSpectators(activeKeys.length);
        }
      } catch (error) {
        console.log('Spectator tracking error:', error);
      }
    };

    // Initial update
    updateSpectators();
    
    // Update every 3 seconds
    const interval = setInterval(() => {
      if (isActive) {
        updateSpectators();
      }
    }, 3000);

    // Cleanup on unmount
    return () => {
      isActive = false;
      clearInterval(interval);
      // Remove this session
      window.storage.delete(`spectator:${sessionId}`, true).catch(() => {});
    };
  }, [sessionId]);

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  const initiateMatch = () => {
    setMatchStarted(true);
    setCombatLog(prev => [...prev, 'MATCH INITIALIZATION CONFIRMED', `${spectators} SPECTATORS CONNECTED`]);
    
    let count = 3;
    const timer = setInterval(() => {
      count--;
      setCountdown(count);
      setCombatLog(prev => [...prev, `DEPLOYING IN ${count}...`]);
      
      if (count === 0) {
        clearInterval(timer);
        setCombatLog(prev => [...prev, 'GRID DEPLOYED', 'COMBAT ENGAGED']);
        setTimeout(() => setGridRevealed(true), 200);
      }
    }, 800);
  };

  const handleClick = (index) => {
    if (board[index] || checkWinner(board)) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    setMoveCount(moveCount + 1);
    
    setCombatLog(prev => [...prev, `${isXNext ? 'PLAYER' : 'AI_CORE'} SECURED SECTOR ${index + 1}`]);
    
    // Check for winner
    const winner = checkWinner(newBoard);
    if (winner) {
      setTimeout(() => {
        setCombatLog(prev => [...prev, `MATCH COMPLETE`, `VICTOR: ${winner === 'X' ? 'PLAYER' : 'AI_CORE'}`]);
      }, 300);
    } else if (newBoard.every(cell => cell !== null)) {
      setTimeout(() => {
        setCombatLog(prev => [...prev, 'MATCH COMPLETE', 'RESULT: TACTICAL DRAW']);
      }, 300);
    }
  };

  const winner = checkWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto'
    }}>
      {/* Exit button - top left, minimal */}
      <button 
        onClick={onExit}
        style={{
          position: 'absolute',
          top: '-50px',
          left: '0',
          padding: '10px 20px',
          fontSize: '13px',
          fontWeight: 'bold',
          background: 'rgba(255, 68, 68, 0.2)',
          border: '1px solid rgba(255, 68, 68, 0.5)',
          borderRadius: '8px',
          color: '#ff6b6b',
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          fontFamily: 'monospace'
        }}
      >
        ← EXIT ARENA
      </button>

      {/* Real-time Spectator Counter - top right */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '0',
        padding: '10px 20px',
        background: 'rgba(0, 212, 255, 0.1)',
        border: '1px solid rgba(0, 212, 255, 0.4)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontFamily: 'monospace'
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          background: spectators > 0 ? '#ff4757' : '#666',
          borderRadius: '50%',
          animation: spectators > 0 ? 'spectatorPulse 2s infinite' : 'none',
          boxShadow: spectators > 0 ? '0 0 10px #ff4757' : 'none',
          transition: 'all 0.3s ease'
        }}></div>
        <div>
          <span style={{ fontSize: '11px', color: '#666', letterSpacing: '1px' }}>LIVE: </span>
          <span style={{ 
            fontSize: '16px', 
            color: spectators > 0 ? '#00d4ff' : '#666', 
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}>{spectators}</span>
          <span style={{ fontSize: '11px', color: '#666', marginLeft: '5px' }}>
            {spectators === 1 ? 'spectator' : 'spectators'}
          </span>
        </div>
      </div>

      {/* Scanline overlay effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(0deg, transparent 50%, rgba(0, 212, 255, 0.02) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        zIndex: 5,
        opacity: 0.3
      }}></div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 400px',
        gap: '30px',
        marginTop: '40px'
      }}>
        {/* LEFT: Main Arena */}
        <div style={{
          background: 'rgba(10, 10, 20, 0.8)',
          padding: '50px',
          borderRadius: '20px',
          border: '2px solid #00d4ff',
          boxShadow: '0 0 60px rgba(0, 212, 255, 0.4)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Breathing glow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.1), transparent 70%)',
            animation: 'breathe 4s ease-in-out infinite',
            pointerEvents: 'none'
          }}></div>

          <h2 style={{
            fontSize: '42px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            letterSpacing: '4px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}>GRID WARFARE</h2>
          
          <p style={{
            fontSize: '13px',
            color: '#666',
            letterSpacing: '2px',
            marginBottom: '40px',
            fontFamily: 'monospace',
            textAlign: 'center'
          }}>TACTICAL GRID ENGAGEMENT</p>

          {!matchStarted ? (
            /* PRE-MATCH CHAMBER */
            <div style={{
              textAlign: 'center',
              animation: 'fadeIn 0.5s ease-out',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{
                background: 'rgba(0, 212, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: '15px',
                padding: '40px',
                marginBottom: '40px'
              }}>
                <div style={{
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '15px',
                  fontFamily: 'monospace',
                  letterSpacing: '2px'
                }}>YOU ARE ASSIGNED:</div>
                <div style={{
                  fontSize: '72px',
                  fontWeight: 'bold',
                  color: '#00d4ff',
                  marginBottom: '15px',
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.8)'
                }}>X</div>
                <div style={{
                  fontSize: '12px',
                  color: '#00d4ff',
                  fontFamily: 'monospace',
                  letterSpacing: '1px',
                  padding: '8px 20px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  borderRadius: '8px',
                  display: 'inline-block'
                }}>FIRST STRIKE ADVANTAGE</div>
              </div>

              <div style={{
                background: 'rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '12px',
                padding: '30px',
                marginBottom: '40px',
                textAlign: 'left'
              }}>
                <div style={{
                  fontSize: '11px',
                  color: '#666',
                  marginBottom: '15px',
                  fontFamily: 'monospace',
                  letterSpacing: '2px'
                }}>MISSION OBJECTIVE:</div>
                <div style={{
                  fontSize: '15px',
                  color: '#aaa',
                  lineHeight: '1.8',
                  fontFamily: 'system-ui'
                }}>
                  Control the grid. Align three sectors horizontally, vertically, or diagonally. Outthink your opponent. Victory requires strategy over speed.
                </div>
              </div>

              <button
                onClick={initiateMatch}
                style={{
                  padding: '20px 60px',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
                  border: 'none',
                  borderRadius: '12px',
                  color: 'white',
                  cursor: 'pointer',
                  letterSpacing: '3px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer 3s infinite'
                }}></div>
                <span style={{ position: 'relative', zIndex: 1 }}>⚡ INITIATE MATCH ⚡</span>
              </button>
            </div>
          ) : (
            /* COMBAT GRID */
            <div style={{
              opacity: gridRevealed ? 1 : 0,
              transform: gridRevealed ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              position: 'relative',
              zIndex: 1
            }}>
              {(winner || isDraw) && (
                <div style={{
                  padding: '20px 40px',
                  background: winner ? 'rgba(0, 212, 255, 0.2)' : 'rgba(123, 47, 247, 0.2)',
                  borderRadius: '12px',
                  border: `2px solid ${winner ? '#00d4ff' : '#7b2ff7'}`,
                  marginBottom: '30px',
                  fontSize: '24px',
                  color: winner ? '#00d4ff' : '#7b2ff7',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  animation: 'victoryPulse 1s ease-in-out infinite'
                }}>
                  {winner ? `🏆 VICTOR: ${winner}` : "⚡ TACTICAL DRAW"}
                </div>
              )}
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 110px)',
                gap: '10px',
                margin: '0 auto',
                padding: '25px',
                background: 'rgba(0, 0, 0, 0.6)',
                borderRadius: '18px',
                border: '2px solid rgba(0, 212, 255, 0.4)',
                boxShadow: 'inset 0 0 40px rgba(0, 212, 255, 0.1)',
                position: 'relative'
              }}>
                {/* Grid lines glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(0deg, transparent 48%, rgba(0, 212, 255, 0.1) 50%, transparent 52%), linear-gradient(90deg, transparent 48%, rgba(0, 212, 255, 0.1) 50%, transparent 52%)',
                  backgroundSize: '110px 110px',
                  pointerEvents: 'none',
                  borderRadius: '18px'
                }}></div>
                
                {board.map((cell, i) => (
                  <button 
                    key={i}
                    onClick={() => handleClick(i)}
                    style={{
                      width: '110px',
                      height: '110px',
                      fontSize: '42px',
                      fontWeight: 'bold',
                      background: cell ? 'rgba(0, 212, 255, 0.15)' : 'rgba(0, 0, 0, 0.8)',
                      border: '3px solid',
                      borderColor: cell === 'X' ? '#00d4ff' : cell === 'O' ? '#7b2ff7' : 'rgba(0, 212, 255, 0.3)',
                      borderRadius: '12px',
                      color: cell === 'X' ? '#00d4ff' : cell === 'O' ? '#7b2ff7' : 'transparent',
                      cursor: cell || winner ? 'not-allowed' : 'pointer',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      boxShadow: cell ? (cell === 'X' ? '0 0 25px rgba(0, 212, 255, 0.6)' : '0 0 25px rgba(123, 47, 247, 0.6)') : '0 0 10px rgba(0, 0, 0, 0.5)',
                      animation: cell ? 'cellPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (!cell && !winner) {
                        e.currentTarget.style.borderColor = '#00d4ff';
                        e.currentTarget.style.background = 'rgba(0, 212, 255, 0.1)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!cell) {
                        e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                        e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                      }
                    }}
                  >
                    {/* Cell impact effect */}
                    {cell && (
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `radial-gradient(circle, ${cell === 'X' ? '#00d4ff' : '#7b2ff7'}40, transparent)`,
                        borderRadius: '12px',
                        animation: 'impactWave 0.6s ease-out'
                      }}></div>
                    )}
                    <span style={{ position: 'relative', zIndex: 1 }}>{cell}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT: Live System Panel */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {/* Combat Status */}
          <div style={{
            background: 'rgba(10, 10, 20, 0.8)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
          }}>
            <div style={{
              fontSize: '11px',
              color: '#666',
              marginBottom: '15px',
              fontFamily: 'monospace',
              letterSpacing: '2px'
            }}>COMBAT STATUS</div>
            
            {matchStarted && countdown > 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '30px 0'
              }}>
                <div style={{
                  fontSize: '64px',
                  fontWeight: 'bold',
                  color: '#00d4ff',
                  textShadow: '0 0 40px rgba(0, 212, 255, 0.8)',
                  animation: 'countdownPulse 0.8s ease-in-out'
                }}>{countdown}</div>
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '10px',
                  fontFamily: 'monospace'
                }}>DEPLOYING GRID...</div>
              </div>
            ) : gridRevealed ? (
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  padding: '12px',
                  background: 'rgba(0, 212, 255, 0.1)',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>ACTIVE TURN</span>
                  <span style={{ fontSize: '14px', color: '#00d4ff', fontWeight: 'bold' }}>
                    {winner ? 'COMPLETE' : isXNext ? 'PLAYER (X)' : 'AI_CORE (O)'}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '15px',
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>MOVES</span>
                  <span style={{ fontSize: '14px', color: '#7b2ff7', fontWeight: 'bold' }}>{moveCount} / 9</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '12px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '8px'
                }}>
                  <span style={{ fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>THREAT LEVEL</span>
                  <span style={{ fontSize: '14px', color: '#ff4757', fontWeight: 'bold' }}>MEDIUM</span>
                </div>
              </div>
            ) : (
              <div style={{
                textAlign: 'center',
                padding: '20px',
                color: '#666',
                fontSize: '13px',
                fontFamily: 'monospace'
              }}>
                AWAITING INITIALIZATION
              </div>
            )}
          </div>

          {/* Match Info */}
          <div style={{
            background: 'rgba(10, 10, 20, 0.8)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(123, 47, 247, 0.3)',
            boxShadow: '0 0 30px rgba(123, 47, 247, 0.2)'
          }}>
            <div style={{
              fontSize: '11px',
              color: '#666',
              marginBottom: '15px',
              fontFamily: 'monospace',
              letterSpacing: '2px'
            }}>COMBATANTS</div>
            
            <div style={{
              marginBottom: '15px',
              padding: '15px',
              background: 'rgba(0, 212, 255, 0.1)',
              borderRadius: '10px',
              border: '1px solid rgba(0, 212, 255, 0.3)'
            }}>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '5px', fontFamily: 'monospace' }}>PLAYER</div>
              <div style={{ fontSize: '18px', color: '#00d4ff', fontWeight: 'bold' }}>YOU</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '5px', fontFamily: 'monospace' }}>SYMBOL: X</div>
            </div>
            
            <div style={{
              padding: '15px',
              background: 'rgba(123, 47, 247, 0.1)',
              borderRadius: '10px',
              border: '1px solid rgba(123, 47, 247, 0.3)'
            }}>
              <div style={{ fontSize: '10px', color: '#666', marginBottom: '5px', fontFamily: 'monospace' }}>OPPONENT</div>
              <div style={{ fontSize: '18px', color: '#7b2ff7', fontWeight: 'bold' }}>AI_CORE v1.2</div>
              <div style={{ fontSize: '11px', color: '#666', marginTop: '5px', fontFamily: 'monospace' }}>SYMBOL: O</div>
            </div>
          </div>

          {/* Combat Log */}
          <div style={{
            background: 'rgba(10, 10, 20, 0.8)',
            padding: '25px',
            borderRadius: '15px',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)',
            flex: 1,
            minHeight: '200px'
          }}>
            <div style={{
              fontSize: '11px',
              color: '#666',
              marginBottom: '15px',
              fontFamily: 'monospace',
              letterSpacing: '2px'
            }}>COMBAT LOG</div>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.5)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              maxHeight: '300px',
              overflowY: 'auto',
              fontFamily: 'monospace',
              fontSize: '11px',
              color: '#00ff88',
              lineHeight: '1.8'
            }}>
              {combatLog.slice(-8).map((log, i) => (
                <div key={i} style={{
                  opacity: 0.4 + (i * 0.075),
                  animation: 'logEntry 0.3s ease-out',
                  marginBottom: '5px'
                }}>
                  {'>'} {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cellPop {
          0% { transform: scale(0.7); opacity: 0; }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes impactWave {
          0% { opacity: 1; transform: scale(0.5); }
          100% { opacity: 0; transform: scale(1.5); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes countdownPulse {
          0% { transform: scale(1); opacity: 0; }
          50% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes victoryPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logEntry {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spectatorPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </div>
  );
}

// --- GAME 2: ROCK PAPER SCISSORS ---
function RockPaperScissors({ onExit }) {
  const [result, setResult] = useState("Choose your weapon!");
  const [playerChoice, setPlayerChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const play = (choice) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setPlayerChoice(null);
    setAiChoice(null);
    setResult("Rock... Paper... Scissors... SHOOT!");
    
    setTimeout(() => {
      const opts = ['Rock', 'Paper', 'Scissors'];
      const ai = opts[Math.floor(Math.random() * 3)];
      setPlayerChoice(choice);
      setAiChoice(ai);
      
      if (choice === ai) setResult(`⚡ DRAW! Both picked ${choice}`);
      else if (
        (choice === 'Rock' && ai === 'Scissors') ||
        (choice === 'Paper' && ai === 'Rock') ||
        (choice === 'Scissors' && ai === 'Paper')
      ) setResult(`🏆 YOU WIN! ${choice} beats ${ai}`);
      else setResult(`💀 YOU LOSE! ${ai} beats ${choice}`);
      
      setIsAnimating(false);
    }, 1500);
  };

  const getEmoji = (choice) => {
    if (choice === 'Rock') return '🪨';
    if (choice === 'Paper') return '📄';
    if (choice === 'Scissors') return '✂️';
    return '❓';
  };

  return (
    <div style={{
      marginTop: '40px',
      padding: '40px',
      background: 'rgba(20, 20, 40, 0.8)',
      borderRadius: '20px',
      border: '2px solid #ff4757',
      boxShadow: '0 0 40px rgba(255, 71, 87, 0.3)',
      display: 'inline-block',
      minWidth: '600px'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #ff4757, #ff6348)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        letterSpacing: '3px'
      }}>COMBAT CLASH</h2>
      <div style={{
        padding: '15px 30px',
        background: 'rgba(255, 71, 87, 0.1)',
        borderRadius: '10px',
        border: '1px solid #ff4757',
        marginBottom: '30px',
        fontSize: '18px',
        color: '#ff4757'
      }}>{result}</div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '40px',
        padding: '30px',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '15px'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '10px',
            animation: isAnimating ? 'shake 0.5s ease-in-out infinite' : 'none',
            display: 'inline-block'
          }}>
            {playerChoice ? getEmoji(playerChoice) : '✊'}
          </div>
          <p style={{
            color: '#00d4ff',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>YOU</p>
        </div>
        
        <div style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#7b2ff7',
          padding: '10px 20px',
          background: 'rgba(123, 47, 247, 0.2)',
          borderRadius: '10px',
          border: '2px solid #7b2ff7'
        }}>VS</div>
        
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '10px',
            animation: isAnimating ? 'shake 0.5s ease-in-out infinite' : 'none',
            display: 'inline-block',
            transform: 'scaleX(-1)'
          }}>
            {aiChoice ? getEmoji(aiChoice) : '✊'}
          </div>
          <p style={{
            color: '#ff4757',
            fontSize: '18px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>CPU</p>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        marginBottom: '30px'
      }}>
        {['Rock', 'Paper', 'Scissors'].map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            disabled={isAnimating}
            style={{
              padding: '20px 30px',
              fontSize: '18px',
              fontWeight: 'bold',
              background: isAnimating ? 'rgba(100, 100, 100, 0.3)' : 'linear-gradient(135deg, rgba(255, 71, 87, 0.2), rgba(255, 99, 72, 0.2))',
              border: '2px solid #ff4757',
              borderRadius: '15px',
              color: 'white',
              cursor: isAnimating ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 0 15px rgba(255, 71, 87, 0.3)',
              opacity: isAnimating ? 0.5 : 1
            }}
          >
            <span style={{ fontSize: '32px' }}>{getEmoji(choice)}</span>
            <span style={{ letterSpacing: '1px' }}>{choice}</span>
          </button>
        ))}
      </div>
      
      <button 
        onClick={onExit}
        style={{
          padding: '12px 30px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #ff4444, #ff6b6b)',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(255, 68, 68, 0.4)'
        }}
      >
        <span>← BACK TO HUB</span>
      </button>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
}

// --- GAME 3: NUMBER GUESS ---
function NumberGuess({ onExit }) {
  const [target] = useState(Math.floor(Math.random() * 10) + 1);
  const [msg, setMsg] = useState("Guess a number between 1 and 10");
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');

  const checkGuess = () => {
    const val = parseInt(guess);
    if (isNaN(val) || val < 1 || val > 10) return;
    
    setAttempts(attempts + 1);
    
    if (val === target) setMsg(`🏆 CORRECT! You won in ${attempts + 1} attempts!`);
    else if (val < target) setMsg("📉 Too low! Try again.");
    else setMsg("📈 Too high! Try again.");
    
    setGuess('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      checkGuess();
    }
  };

  return (
    <div style={{
      marginTop: '40px',
      padding: '40px',
      background: 'rgba(20, 20, 40, 0.8)',
      borderRadius: '20px',
      border: '2px solid #7b2ff7',
      boxShadow: '0 0 40px rgba(123, 47, 247, 0.3)',
      display: 'inline-block',
      minWidth: '500px'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #7b2ff7, #a855f7)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '20px',
        letterSpacing: '3px'
      }}>CODE BREACH</h2>
      <div style={{
        padding: '15px 30px',
        background: 'rgba(123, 47, 247, 0.1)',
        borderRadius: '10px',
        border: '1px solid #7b2ff7',
        marginBottom: '20px',
        fontSize: '18px',
        color: '#7b2ff7'
      }}>{msg}</div>
      <div style={{
        padding: '10px 20px',
        background: 'rgba(123, 47, 247, 0.2)',
        borderRadius: '10px',
        border: '1px solid #7b2ff7',
        marginBottom: '30px',
        fontSize: '16px',
        color: '#a855f7'
      }}>Attempts: {attempts}</div>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <input 
          type="number" 
          min="1" 
          max="10" 
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="1-10"
          style={{
            padding: '15px 20px',
            fontSize: '18px',
            background: 'rgba(123, 47, 247, 0.1)',
            border: '2px solid #7b2ff7',
            borderRadius: '10px',
            color: 'white',
            outline: 'none',
            width: '150px',
            textAlign: 'center',
            boxShadow: '0 0 15px rgba(123, 47, 247, 0.2)'
          }}
        />
        <button 
          onClick={checkGuess}
          style={{
            padding: '15px 40px',
            fontSize: '18px',
            fontWeight: 'bold',
            background: 'linear-gradient(90deg, #7b2ff7, #a855f7)',
            border: 'none',
            borderRadius: '10px',
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '2px',
            transition: 'all 0.3s ease',
            boxShadow: '0 0 20px rgba(123, 47, 247, 0.4)'
          }}
        >
          <span>GUESS</span>
        </button>
      </div>
      <button 
        onClick={onExit}
        style={{
          marginTop: '30px',
          padding: '12px 30px',
          fontSize: '16px',
          fontWeight: 'bold',
          background: 'linear-gradient(90deg, #ff4444, #ff6b6b)',
          border: 'none',
          borderRadius: '10px',
          color: 'white',
          cursor: 'pointer',
          letterSpacing: '1px',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px rgba(255, 68, 68, 0.4)'
        }}
      >
        <span>← BACK TO HUB</span>
      </button>
    </div>
  );
}

// --- MAIN ARENA LOBBY ---
function App() {
  const [activeGame, setActiveGame] = useState(null);
  const [username, setUsername] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [userRank] = useState('INITIATE');
  const [userXP] = useState(750);
  const [systemLogs, setSystemLogs] = useState([
    'ARENA PROTOCOL ACTIVE',
    'COMBAT MODULES ONLINE',
    'AWAITING CHALLENGER'
  ]);

  const handleGameSelect = (game) => {
    setIsTransitioning(true);
    setSystemLogs(prev => [...prev, `LOADING ARENA: ${game.toUpperCase()}`]);
    setTimeout(() => {
      setActiveGame(game);
      setIsTransitioning(false);
    }, 400);
  };

  const handleExit = () => {
    setIsTransitioning(true);
    setSystemLogs(prev => [...prev, 'RETURNING TO HUB']);
    setTimeout(() => {
      setActiveGame(null);
      setIsTransitioning(false);
    }, 400);
  };

  if (!username) {
    return <LoginModal onLogin={setUsername} />;
  }

  const games = [
    { 
      id: 'ttt', 
      icon: '⚔️', 
      title: 'GRID WARFARE', 
      subtitle: 'Tic Tac Toe',
      difficulty: 'MEDIUM',
      winRate: 67,
      featured: true,
      color: '#00d4ff',
      xpReward: 150,
      status: 'ACTIVE'
    },
    { 
      id: 'rps', 
      icon: '👊', 
      title: 'COMBAT CLASH', 
      subtitle: 'Rock Paper Scissors',
      difficulty: 'EASY',
      winRate: 52,
      color: '#ff4757',
      xpReward: 100,
      status: 'ACTIVE'
    },
    { 
      id: 'num', 
      icon: '🎯', 
      title: 'CODE BREACH', 
      subtitle: 'Number Guess',
      difficulty: 'HARD',
      winRate: 45,
      color: '#7b2ff7',
      xpReward: 200,
      status: 'ACTIVE'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(123, 47, 247, 0.08) 0%, transparent 50%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'bgShift 10s ease-in-out infinite alternate'
      }}></div>
      
      {/* Floating grid lines */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'gridFloat 20s linear infinite'
      }}></div>
      
      {/* Header HUD */}
      <header style={{
        background: 'rgba(10, 10, 20, 0.95)',
        padding: '20px 40px',
        borderBottom: '2px solid #00d4ff',
        boxShadow: '0 5px 40px rgba(0, 212, 255, 0.4)',
        position: 'relative',
        zIndex: 10,
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 style={{
              fontSize: '42px',
              fontWeight: 'bold',
              margin: '0',
              letterSpacing: '4px',
              display: 'inline-block'
            }}>
              <span style={{ color: '#7b2ff7' }}>[</span>
              <span style={{
                background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'titleGlitch 8s infinite'
              }}>ARENA SYSTEM</span>
              <span style={{ color: '#7b2ff7' }}>]</span>
            </h1>
            <div style={{
              fontSize: '10px',
              fontFamily: 'monospace',
              color: '#666',
              marginTop: '5px',
              letterSpacing: '1px'
            }}>
              v2.4.7 | PROTOCOL: OMEGA
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '30px',
            alignItems: 'center',
            fontSize: '12px',
            fontFamily: 'monospace'
          }}>
            <div>
              <div style={{ color: '#666', marginBottom: '3px' }}>CALLSIGN</div>
              <div style={{ color: '#00d4ff', fontWeight: 'bold', fontSize: '14px' }}>{username}</div>
            </div>
            <div>
              <div style={{ color: '#666', marginBottom: '3px' }}>RANK</div>
              <div style={{ color: '#ff4757', fontWeight: 'bold', fontSize: '14px' }}>{userRank}</div>
            </div>
            <div>
              <div style={{ color: '#666', marginBottom: '3px' }}>XP</div>
              <div style={{ color: '#00ff88', fontWeight: 'bold', fontSize: '14px' }}>{userXP} / 1000</div>
            </div>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#00ff88',
              borderRadius: '50%',
              animation: 'statusBlink 2s infinite',
              boxShadow: '0 0 10px #00ff88'
            }}></div>
          </div>
        </div>
        
        {/* System logs ticker */}
        <div style={{
          marginTop: '15px',
          padding: '8px 15px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '5px',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          fontSize: '10px',
          fontFamily: 'monospace',
          color: '#00ff88',
          maxWidth: '1400px',
          margin: '15px auto 0',
          overflow: 'hidden'
        }}>
          <div style={{ animation: 'logScroll 20s linear infinite', whiteSpace: 'nowrap' }}>
            {systemLogs.slice(-5).map((log, i) => (
              <span key={i} style={{ marginRight: '40px', opacity: 0.7 }}>
                {'>'} {log}
              </span>
            ))}
          </div>
        </div>
        
        {/* XP Progress bar */}
        <div style={{
          marginTop: '10px',
          maxWidth: '1400px',
          margin: '10px auto 0',
          height: '4px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '2px',
          overflow: 'hidden',
          border: '1px solid rgba(0, 212, 255, 0.2)'
        }}>
          <div style={{
            width: `${(userXP / 1000) * 100}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00d4ff, #7b2ff7)',
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
            transition: 'width 0.5s ease'
          }}></div>
        </div>
      </header>
      
      <main style={{
        padding: '60px 20px',
        position: 'relative',
        zIndex: 1,
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {!activeGame ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{
                fontSize: '32px',
                letterSpacing: '4px',
                marginBottom: '10px',
                background: 'linear-gradient(90deg, #00d4ff, #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold'
              }}>CHOOSE YOUR CHALLENGE</h2>
              <p style={{
                color: '#666',
                fontSize: '13px',
                letterSpacing: '2px',
                fontFamily: 'monospace'
              }}>SELECT COMBAT MODULE // ENTER AT YOUR OWN RISK</p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '30px',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {/* Featured Arena - Takes full left column */}
              {games.filter(g => g.featured).map((game) => (
                <div
                  key={game.id}
                  onClick={() => handleGameSelect(game.id)}
                  style={{
                    gridRow: 'span 2',
                    background: 'rgba(10, 10, 20, 0.7)',
                    padding: '50px',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    border: `3px solid ${game.color}`,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 10px 50px ${game.color}40`,
                    animation: 'float 6s ease-in-out infinite'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 20px 60px ${game.color}80`;
                    e.currentTarget.style.borderColor = game.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 10px 50px ${game.color}40`;
                  }}
                >
                  {/* Energy border animation */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${game.color}, transparent)`,
                    animation: 'energySweep 2s linear infinite'
                  }}></div>
                  
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '8px 15px',
                    background: `${game.color}20`,
                    border: `1px solid ${game.color}`,
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: game.color,
                    fontWeight: 'bold',
                    letterSpacing: '1px'
                  }}>★ FEATURED</div>
                  
                  <div style={{
                    fontSize: '120px',
                    marginBottom: '30px',
                    filter: `drop-shadow(0 0 20px ${game.color})`,
                    animation: 'iconBounce 3s ease-in-out infinite',
                    textAlign: 'center'
                  }}>{game.icon}</div>
                  
                  <h3 style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: game.color,
                    letterSpacing: '3px',
                    textAlign: 'center'
                  }}>{game.title}</h3>
                  
                  <p style={{
                    fontSize: '14px',
                    color: '#888',
                    marginBottom: '30px',
                    letterSpacing: '2px',
                    textAlign: 'center',
                    fontFamily: 'monospace'
                  }}>{game.subtitle}</p>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '15px',
                    marginBottom: '25px'
                  }}>
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '15px',
                      borderRadius: '10px',
                      border: `1px solid ${game.color}40`,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '10px', color: '#666', marginBottom: '5px', fontFamily: 'monospace' }}>DIFFICULTY</div>
                      <div style={{ fontSize: '16px', color: game.color, fontWeight: 'bold' }}>{game.difficulty}</div>
                    </div>
                    <div style={{
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '15px',
                      borderRadius: '10px',
                      border: `1px solid ${game.color}40`,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '10px', color: '#666', marginBottom: '5px', fontFamily: 'monospace' }}>WIN RATE</div>
                      <div style={{ fontSize: '16px', color: game.color, fontWeight: 'bold' }}>{game.winRate}%</div>
                    </div>
                  </div>
                  
                  <div style={{
                    background: `linear-gradient(90deg, ${game.color}20, transparent)`,
                    padding: '15px',
                    borderRadius: '10px',
                    border: `1px solid ${game.color}40`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <span style={{ fontSize: '12px', color: '#aaa', fontFamily: 'monospace' }}>XP REWARD</span>
                    <span style={{ fontSize: '20px', color: game.color, fontWeight: 'bold' }}>+{game.xpReward}</span>
                  </div>
                  
                  <div style={{
                    marginTop: '25px',
                    padding: '15px',
                    background: `${game.color}30`,
                    borderRadius: '10px',
                    textAlign: 'center',
                    fontSize: '14px',
                    color: game.color,
                    fontWeight: 'bold',
                    letterSpacing: '2px',
                    border: `2px solid ${game.color}`,
                    fontFamily: 'monospace'
                  }}>
                    ▶ ENTER ARENA
                  </div>
                </div>
              ))}
              
              {/* Secondary Arenas - Right column */}
              {games.filter(g => !g.featured).map((game) => (
                <div
                  key={game.id}
                  onClick={() => handleGameSelect(game.id)}
                  style={{
                    background: 'rgba(10, 10, 20, 0.6)',
                    padding: '35px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    border: `2px solid ${game.color}60`,
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    boxShadow: `0 8px 30px ${game.color}30`,
                    animation: `float 6s ease-in-out infinite ${game.id === 'rps' ? '1s' : '2s'}`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)';
                    e.currentTarget.style.boxShadow = `0 15px 50px ${game.color}60`;
                    e.currentTarget.style.borderColor = game.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `0 8px 30px ${game.color}30`;
                  }}
                >
                  <div style={{
                    fontSize: '70px',
                    marginBottom: '20px',
                    filter: `drop-shadow(0 0 15px ${game.color})`,
                    textAlign: 'center',
                    animation: 'iconPulse 4s ease-in-out infinite'
                  }}>{game.icon}</div>
                  
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    color: game.color,
                    letterSpacing: '2px',
                    textAlign: 'center'
                  }}>{game.title}</h3>
                  
                  <p style={{
                    fontSize: '11px',
                    color: '#666',
                    marginBottom: '20px',
                    letterSpacing: '1px',
                    textAlign: 'center',
                    fontFamily: 'monospace'
                  }}>{game.subtitle}</p>
                  
                  <div style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      flex: 1,
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '10px',
                      borderRadius: '8px',
                      border: `1px solid ${game.color}30`,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '9px', color: '#666', marginBottom: '3px', fontFamily: 'monospace' }}>DIFF</div>
                      <div style={{ fontSize: '13px', color: game.color, fontWeight: 'bold' }}>{game.difficulty}</div>
                    </div>
                    <div style={{
                      flex: 1,
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '10px',
                      borderRadius: '8px',
                      border: `1px solid ${game.color}30`,
                      textAlign: 'center'
                    }}>
                      <div style={{ fontSize: '9px', color: '#666', marginBottom: '3px', fontFamily: 'monospace' }}>WIN</div>
                      <div style={{ fontSize: '13px', color: game.color, fontWeight: 'bold' }}>{game.winRate}%</div>
                    </div>
                  </div>
                  
                  <div style={{
                    background: `${game.color}20`,
                    padding: '10px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    fontSize: '11px',
                    color: game.color,
                    fontWeight: 'bold',
                    fontFamily: 'monospace'
                  }}>
                    +{game.xpReward} XP
                  </div>
                </div>
              ))}
            </div>
            
            {/* Locked arena teaser */}
            <div style={{
              marginTop: '40px',
              padding: '30px',
              background: 'rgba(10, 10, 20, 0.4)',
              borderRadius: '20px',
              border: '2px dashed #444',
              textAlign: 'center',
              opacity: 0.6,
              cursor: 'not-allowed'
            }}>
              <div style={{ fontSize: '50px', marginBottom: '15px', filter: 'grayscale(1)' }}>🔒</div>
              <h3 style={{
                fontSize: '22px',
                color: '#666',
                marginBottom: '8px',
                letterSpacing: '2px'
              }}>CLASSIFIED ARENA</h3>
              <p style={{
                fontSize: '12px',
                color: '#444',
                fontFamily: 'monospace',
                letterSpacing: '1px'
              }}>UNLOCK AT RANK: VETERAN (LVL 5)</p>
            </div>
          </div>
        ) : (
          <div>
            {activeGame === 'ttt' && <TicTacToe onExit={handleExit} />}
            {activeGame === 'rps' && <RockPaperScissors onExit={handleExit} />}
            {activeGame === 'num' && <NumberGuess onExit={handleExit} />}
          </div>
        )}
      </main>
      
      <style>{`
        @keyframes bgShift {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(50px) translateY(50px); }
        }
        @keyframes gridFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }
        @keyframes titleGlitch {
          0%, 98% { filter: none; }
          99% { filter: blur(1px) brightness(1.5); transform: translateX(-2px); }
          100% { filter: blur(1px) brightness(0.8); transform: translateX(2px); }
        }
        @keyframes statusBlink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
        }
        @keyframes logScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes energySweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

export default App;